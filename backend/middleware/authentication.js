const { isTokenValid, attachCookiesToResponse } = require("../utils")
const CustomError = require('../errors');

const authenticateUser = async (req, res, next) => {
  const { refreshToken, accessToken } = req.signedCookies;

  try{
    if(accessToken){
      const payload = isTokenValid(accessToken);
      req.user = payload.user;
      return next();
    }

    const payload = isTokenValid(refreshToken);

    const existingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken
    })

    if(!existingToken || !existingToken?.isValid){
      throw new CustomError.UnauthenticatedError('身份验证无效！');
    }

    attachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken.refreshToken
    })

    req.user = payload.user;
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("身份验证无效！")
  }
}

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        '没有权限访问该路由'
      );
    }
    next();
  };
}

module.exports = {
  authenticateUser,
  authorizePermissions
}
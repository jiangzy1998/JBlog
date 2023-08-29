const { StatusCodes } = require('http-status-codes');
const { sendVerificationEmail, attachCookiesToResponse } = require('../utils/jwt');
const CustomError = require('../errors');
const User = require('../models/User')

const crypto = require("crypto");
const createTokenUser = require('../utils/createTokenUser');
const Token = require('../models/Token');

const register = async (req, res) => {
  const { email, name, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if(emailAlreadyExists){
    throw new CustomAPIError.BadRequestError("Email already exists");
  }

  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin":'user';

  const verificationToken = crypto.randomBytes(40).toString('hex');
  

  const user = await User.create({
    name,
    email,
    password,
    role, 
    verificationToken
  })

  const origin = "http://localhost:3000";

  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin
  })

  res.status(StatusCodes.CREATED).json({
    msg: 'Success! Please check your email to verify account',
  })
}

const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;
  const user = await User.findOne({ email });

  if(!user){
    throw new CustomError.UnauthenticatedError('Verification Failed');
  }

  if(user.verificationToken !== verificationToken){
    throw new CustomError.UnauthenticatedError('Verification Failed');
  }

  (user.isVerified = true), (user.verified = Date.now());
  user.verificationToken = '';

  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Email Verified' });
}

const login = async (req, res) => {
  const { email, password } = req.body;

  // 如果没有邮箱和密码
  if(!email || !password){
    throw new CustomError.BadRequestError("请提供邮箱和密码！");
  }
  // 通过邮箱找到用户实体
  const user = await User.findOne({ email });
  // 用户不存在
  if(!user){
    throw new CustomError.UnauthenticatedError("用户不存在！")
  }

  // 判断密码是否真确
  const isPasswordCorrect = await user.comparePassword(password);
  if(!isPasswordCorrect){
    throw new CustomError.UnauthenticatedError("密码错误！")
  }

  if(!user.isVerified){
    throw new CustomError.UnauthenticatedError("请先验证你的邮箱！")
  }
  
  const tokenUser = createTokenUser(user);

  let refreshToken = '';

  const existingToken = await Token.findOne({ user: user._id });

  if(existingToken){
    const { isValid } = existingToken;
    if(!isValid){
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user:tokenUser, refreshToken });
    res.status(StatusCodes.OK).json({ user:tokenUser });
    return;
  }

  refreshToken = crypto.randomBytes(40).toString('hex');
  const userAgent = req.headers['user-agent'];
  const ip = req.ip;
  const userToken = { refreshToken, ip, userAgent, user:user._id };

  await Token.create(userToken);
  attachCookiesToResponse({ res, user: tokenUser, refreshToken });
  res.status(StatusCodes.OK).json({ user: tokenUser });
}

module.exports = {
  register,
  login,
  verifyEmail
}

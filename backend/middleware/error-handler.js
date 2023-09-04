const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later',
  };

  // 数据验证失败，可能是由于缺少必填字段、字段格式不正确或其他验证规则未通过等原因。
  if(err.name === "ValidationError"){
    customError.msg == Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = 400;
  }

  // MongoDB 出现 重复键错误。
  // 这个错误通常发生在尝试向数据库中插入一个已经存在的唯一键值，例如试图插入一个已存在的索引值，比如重复的邮箱地址或用户名。
  if(err.code && err.code === 11000){
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }

  // CastError 错误通常与数据库查询和数据模型中的字段类型不匹配有关。
  if(err.name === 'CastError'){
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({ msg:customError.msg });
}

module.exports = errorHandlerMiddleware;

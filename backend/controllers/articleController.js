const Article = require("../models/Article");
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const path = require('path');

// 获取所有的文章
// page size
const getAllArticles = async (req, res) => {
  let { page, size } = req.param;
  if(!page){
    page = 0;
  }
  if(!size){
    size = 10;
  }
  const articles = await Article.find({}).sort({updatedAt:-1}).skip(size * page ).limit(size);
  res.status(StatusCodes.OK).json(
    {
      data:articles,
      code:0
    }
  )
} 

module.exports = {
  getAllArticles
}

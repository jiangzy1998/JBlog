const Article = require("../models/Article");
const { StatusCodes } = require('http-status-codes');


// 新建一篇文章
const createArticle = async (req, res) => {
  // TODO 需要做校验，目前先进行接口测试
  const article = await Article.create(req.body);
  res.status(StatusCodes.CREATED).json({ data:article });
}

// 获取所有的文章
// page 从 1 开始
// size 默认为 10
const getAllArticles = async (req, res) => {
  let { page, size } = req.params;
  if(!page){
    page = 1;
  }
  if(!size){
    size = 10;
  }
  // 通过 .select() 方法来选择要返回的字段。用空格分隔字段名称。
  const resultFieds = "title excerpt articleID updatedAt";
  const articles = await Article.find({}).select(resultFieds).sort({updatedAt:-1}).skip(size * ( page - 1 ) ).limit(size);
  res.status(StatusCodes.OK).json(
    {
      data:articles,
      code:0
    }
  )
} 

// 根据获取文章详情
const getArticleById = async (req, res) => {
  let { id } = req.params;
  const articleID = Number.parseInt(id);
  if(isNaN(articleID)){
    res.status(StatusCodes.BAD_REQUEST).json({data:"", msg:'参数格式错误！'})
  }
  const article = await Article.find({articleID:articleID}).limit(1);
  res.status(StatusCodes.OK).json({data:article})
}


module.exports = {
  getAllArticles,
  getArticleById,
  createArticle
}

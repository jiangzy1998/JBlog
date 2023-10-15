const Article = require("../models/Article");
const { StatusCodes } = require('http-status-codes');
const crypto = require('crypto');
const fs = require('fs');


// 新建一篇文章
const createArticle = async (req, res) => {
  // TODO 需要做校验，目前先进行接口测试
  const article = await Article.create(req.body);
  res.status(StatusCodes.CREATED).json({ data: article });
}

// 获取所有的文章
// page 从 1 开始
// size 默认为 10
const getAllArticles = async (req, res) => {
  let { page, size } = req.params;
  if (!page) {
    page = 1;
  }
  if (!size) {
    size = 10;
  }
  // 通过 .select() 方法来选择要返回的字段。用空格分隔字段名称。
  const resultFieds = "_id title excerpt updatedAt";
  const articles = await Article.find({}).select(resultFieds).sort({ updatedAt: -1 }).skip(size * (page - 1)).limit(size);
  res.status(StatusCodes.OK).json(
    {
      data: articles,
      code: 0
    }
  )
}

// 根据获取文章详情
const getArticleById = async (req, res) => {
  let { id } = req.params;
  // const articleID = Number.parseInt(id);
  // if(isNaN(articleID)){
  //   res.status(StatusCodes.BAD_REQUEST).json({data:"", msg:'参数格式错误！'})
  // }
  const article = await Article.find({ _id: id }).limit(1);
  res.status(StatusCodes.OK).json({ data: article })
}



// ================================================
// 富文本编辑器图片上传
// ================================================

// 生成任意长度的 hash 值
const generateRandomHash = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// 富文本编辑器上传图片
const uploadImage = async (req, res) => {
  console.log(req.file)
  // 构建返回数据
  const responseData = {
    // 返回文件名
    fileName: req.file.filename
  }
  res.status(StatusCodes.OK).json({ data: responseData })
}


// 富文本编辑器中 base64格式图片 上传  
const uploadBase64Image = async (req, res) => {
  if (!!req.body && !!req.body.image) {
    const base64Data = req.body.image.replace(/^data:image\/\w+;base64,/, "");;
    const fileName = generateRandomHash(16) + '.png';
    const dataBuffer = Buffer.from(base64Data, 'base64');
    // 将Base64数据保存为文件
    fs.writeFile(process.env.BLOG_IMAGE_PATH + fileName, dataBuffer, (err) => {
      if (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      } else {
        // 构建返回数据
        const responseData = {
          // 返回文件名
          fileName: fileName
        }
        res.status(StatusCodes.OK).json({ data: responseData })
      }
    });
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ err: "参数格式错误!" });
  }
}


module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,

  uploadImage,
  uploadBase64Image
}

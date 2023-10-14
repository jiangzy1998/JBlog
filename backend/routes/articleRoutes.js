const express = require("express");
const router = express.Router();
const multer = require('multer');

const { 
  getAllArticles,
  getArticleById,
  createArticle,

  uploadImage,
  uploadImageBase64
} = require("../controllers/articleController")


// 配置文件上传的目录和自定义文件名
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 将文件保存在指定目录下
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    // 生成一个新的文件名，例如，当前时间戳 + 原始文件名
    const timestamp = Date.now();
    const newFileName = `${timestamp}-${file.originalname}`;
    cb(null, newFileName);
  },
});
const uploadToDisk = multer({ diskStorage });


const memoryStorage = multer.memoryStorage();
const uploadToMemory = multer({ memoryStorage });


router
  .route('/')
  .get(getAllArticles)
  .post(createArticle)

router
  .route('/:id')
  .get(getArticleById)

router
  .route('/upload-image')
  .post(uploadToDisk.single('image'), uploadImage)

router
  .route('/upload-image-base64')
  .post(uploadToMemory.single('image'), uploadImageBase64)


module.exports = router;


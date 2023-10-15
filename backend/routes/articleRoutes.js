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
// 上传至磁盘
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 将文件保存在uploads目录下
    cb(null, process.env.BLOG_IMAGE_PATH); 
  },
  filename: (req, file, cb) => {
    // 生成一个新的文件名，例如，当前时间戳 + 原始文件名
    const timestamp = Date.now();
    const newFileName = `${timestamp}-${file.originalname}`;
    cb(null, newFileName);
  },
});
const uploadToDisk = multer({ storage:diskStorage });

// 上传至内存
const memoryStorage = multer.memoryStorage();
const uploadToMemory = multer({ storage:memoryStorage });


router
  .route('/')
  .get(getAllArticles)
  .post(createArticle)

router
  .route('/:id')
  .get(getArticleById)

// 用户选择本地图片上传
router
  .route('/upload-image')
  .post(uploadToDisk.single('image'), uploadImage)

// 用户上传 base64 格式图片
router
  .route('/upload-image-base64')
  .post(uploadToMemory.single('image'), uploadImageBase64)


module.exports = router;


const express = require("express");
const router = express.Router();

const { 
  getAllArticles,
  getArticleById,
  createArticle
} = require("../controllers/articleController")

router
  .route('/')
  .get(getAllArticles)
  .post(createArticle)

router
  .route('/:id')
  .get(getArticleById)


module.exports = router;


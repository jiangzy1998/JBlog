const express = require("express");
const router = express.Router();

const { 
  getAllArticles,
  createArticle
} = require("../controllers/articleController")

router
  .route('/')
  .get(getAllArticles)
  .post(createArticle)


module.exports = router;


const express = require("express");
const router = express.router();

const { getAllArticles } = require("../controllers/articleController")

router
  .router('/')
  .get(getAllArticles);


module.exports = router;


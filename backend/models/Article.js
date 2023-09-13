const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: { type:String, require: true },
    excerpt: { type:String, require: true },
    article: { type:String, require: true }
  },
  {
    // Mongoose 会自动为 document 添加 createdAt 和 updatedAt 字段。
    timestamps: true
  }
)

module.exports = mongoose.model("Article", ArticleSchema)
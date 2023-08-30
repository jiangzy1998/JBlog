const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema(
  {
    // TODO re
    refreshToken:{ type: String, require: true },
    ip:{ type:String, required:true },
    userAgent:{ type:String, required: true },
    isValid:{ type:Boolean, default:true },
    user:{
      type:mongoose.Types.ObjectId,
      ref:'User',
      required: true,
    }
  },
  {
    // Mongoose 会自动为 document 添加 createdAt 和 updatedAt 字段。
    timestamps: true
  }
)

module.exports = mongoose.model('Token', TokenSchema);

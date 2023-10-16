require('dotenv').config();
require('express-async-errors');
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

// 数据库
const connectDB = require("./db/connect");

// 路由
const authRouter = require("./routes/authRoutes")
const articleRouter = require("./routes/articleRoutes")

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// 创建一个可写流，将日志写入到文件中
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// 使用 Morgan 中间件来记录日志
app.use(morgan('combined', { stream: accessLogStream }));

app.set('trust proxy', 1);

app.use(helmet());
app.use(cors({
  origin: 'http://127.0.0.1:5173', // 允许前端应用的域名
  credentials: true, // 允许发送跨域 Cookie
}));
app.use(xss());
app.use(mongoSanitize());

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use('/static', express.static('public'));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/article', articleRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

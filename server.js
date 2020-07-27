const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const logger = require("./middleware/logger");
var rfs = require("rotating-file-stream");
var colors = require("colors"); // version 2.x
const connectDB = require("./config/db");

// -----------
dotenv.config({ path: "./config/config.env" });
connectDB();
// Router оруулж ирэх
const categoriesRoutes = require("./routes/categories");
const { Server } = require("http");
//  App ын тохиргоог process.env рүү ачааллах process.env Энэ хэсэгт орж ирнэ

const app = express();
// Body Parser
app.use(express.json());

//  logger middleware холбох
app.use(logger);
//  app руу middleware -ийг холболог use гэдэг функцийг ашиглана аа.
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});
app.use(morgan("combined", { stream: accessLogStream }));
app.use("/api/v1/categories/", categoriesRoutes);
const sercer = app.listen(
  process.env.PORT,
  console.log(`express Server   ${process.env.PORT} порт дээр аслаа`.rainbow)
);
process.on("unhandledRejection", (err, promise) => {
  console.log(`Алдаа гарчээ ёоо + ${err.message}`.underline.red.bold);
  Server.close(() => {
    process.exit(1);
  });
});

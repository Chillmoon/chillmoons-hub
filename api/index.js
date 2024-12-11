import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://Chillmoon:${process.env.MONGOPASS}@chillmoons-hub.5a7tv.mongodb.net/chillmoons-hub?retryWrites=true&w=majority&appName=chillmoons-hub`
  )
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((e) => {
    console.log(e.errorResponse.errmsg);
  });

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use(cookieParser());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

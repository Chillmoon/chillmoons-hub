import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouts from "./routes/user.route.js";
import authRouts from "./routes/auth.route.js";

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

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/user", userRouts);
app.use("/api/auth", authRouts);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const statusMessage = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    statusMessage,
  });
});

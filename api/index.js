import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPass = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPass });

  try {
    await newUser.save();
    res.json("Signup is successful");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      next(errorHandler(404, "User not found"));
    }

    const validPassport = bcryptjs.compareSync(password, foundUser.password);
    if (!validPassport) {
      return next(errorHandler(400, "Invalid password"));
    }

    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = foundUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest.username + ", Signin successful");
  } catch (error) {
    next(error);
  }
};

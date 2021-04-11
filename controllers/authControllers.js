import userModel from "../models/userModel.js";
import { generateToken } from "../utils/genToken.js";

export const POST_REGISTER = async (req, res, next) => {
  const { fullName, voterId, password } = req.body;
  try {
    const isUser = await userModel.findOne({ voterId });

    // if user is not already in the database
    if (!isUser) {
      const newUser = await userModel.create({
        fullName,
        voterId,
        password,
      });

      const token = generateToken(newUser._id);
      res.json({
        username: newUser.fullName,
        voterId: newUser.voterId,
        userId: newUser._id,
        token,
      });
    }

    // User Already Exist
    const err = new Error();
    err.message = "Email Already Exist";
    err.status = 409;
    next(err);
  } catch (error) {
    // Handle internal server error
    const err = new Error();
    err.message = error.message;
    err.status = 500;
    next(err);
  }
};

import userModel from "../models/userModel.js";
import { generateToken } from "../utils/genToken.js";

// controller to handle post register
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
        isAdmin: newUser.isAdmin,
        token,
      });
    }

    // User Already Exist
    if (isUser) {
      const err = new Error();
      err.message = "Voter Already Exist";
      err.status = 409;
      next(err);
      return;
    }
  } catch (error) {
    // Handle internal server error
    const err = new Error();
    err.message = error.message;
    err.status = 500;
    next(err);
    return;
  }
};

// controller to handle post login
export const POST_LOGIN = async (req, res, next) => {
  const { voterId, password } = req.body;
  try {
    const isUser = await userModel.findOne({ voterId });

    // if no user with ID found
    if (!isUser) {
      // User doesnt Exist
      const err = new Error();
      err.message = "Invalid Voter Id";
      err.status = 404;
      next(err);
      return;
    }

    // using the static login method
    const user = await userModel.login(voterId, password);

    // checkout for incorrect password
    if (user.status === 403) {
      const err = new Error();
      err.message = "Incorrect password";
      err.status = 403;
      next(err);
      return;
    }

    // generate jwt token
    const token = generateToken(user._id);

    res.status(200).json({
      username: user.fullName,
      voterId: user.voterId,
      userId: user._id,
      isAdmin: user.isAdmin,
      token,
    });
  } catch (error) {
    // Handle internal server error
    const err = new Error();
    err.message = error.message;
    err.status = 500;
    next(err);
    return;
  }
};

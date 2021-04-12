import express from "express";
import { POST_REGISTER, POST_LOGIN } from "../controllers/authControllers.js";
const authRouter = express.Router();

// post register
authRouter.post("/register", POST_REGISTER);

// post login
authRouter.post("/login", POST_LOGIN);

export default authRouter;

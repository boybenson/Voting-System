import express from "express";
import { POST_REGISTER } from "../controllers/authControllers.js";
const authRouter = express.Router();

// post register
authRouter.post("/register", POST_REGISTER);

export default authRouter;

// Importing packages
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import { handleError } from "./middlewares/errorHandler.js";
import authRouter from "./routes/authRoutes.js";

const PORT = process.env.PORT;

// initializing app
const app = express();

// mongoose connection
mongoose.connect("mongodb://localhost:27017/GHANA-ELECTORAL-COMMISION", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  // App listens on port from env
  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
});

// middlewares
app.use(express.json());

app.use("/api/auth", authRouter);

// Error handeling middleware
app.use(handleError);

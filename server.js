// Importing packages
import dotenv from "dotenv";
dotenv.config();
import express from "express";

const PORT = process.env.PORT;
// initializing app
const app = express();

// middlewares
app.use(express.json());

// App listens on port from env
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

import express from "express";
import UserModel from "./model/user";
import mongoose from "mongoose";
import cors from "cors";
require("dotenv").config();
import UserRouter from "./routes/user.routes";

const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL;
if (!MONGODB_URL) {
  throw new Error("MONGODB_URL is not defined in the environment variables");
}

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/user", UserRouter);

app.listen(PORT, () => {
  console.log(`App running`);
});

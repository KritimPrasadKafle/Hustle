import express from "express";
import { getAllBlogs } from "../controller/blog-controller.js";

const blogRouter = express.Router()

blogRouter.get("", getAllBlogs)

export default blogRouter;
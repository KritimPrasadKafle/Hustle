import express from "express";
import { getAllBlogs, addBlog, updateBlog, getById, deleteBlogById, getByUserId } from "../controller/blog-controller.js";


const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)

blogRouter.post("/add", addBlog)

blogRouter.put("/update/:id", updateBlog)

blogRouter.get("/:id", getById)

blogRouter.delete("/:id", deleteBlogById)

blogRouter.get("/user/:id", getByUserId)

export default blogRouter;
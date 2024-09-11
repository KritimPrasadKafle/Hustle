import express from "express";
import { getAllUser } from "../controller/user-controller.js";
import { signup } from "../controller/user-controller.js";
import { login } from "../controller/user-controller.js";

export const router = express.Router();

router.get("/", getAllUser)

// export default router;

router.post("/")
router.post("/signup", signup)
router.post("/login", login)

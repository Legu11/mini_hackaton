import express from "express";
import { getUserById, addUser } from "./user.service.js";

const userRouter = express.Router();

userRouter.get("/:id", getUserById);
userRouter.post("/", addUser);

export default userRouter;
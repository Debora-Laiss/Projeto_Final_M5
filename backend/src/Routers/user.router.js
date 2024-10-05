import { getAllUser, getUserById,createNewUser,deleteUserById,updateUserById } from "../Controllers/user.controllers.js"
import { Router } from "express";

const  userRouter = Router();

userRouter.get("/user/all", getAllUser);

userRouter.get("/user/:id", getUserById)

userRouter.post("/user/new", createNewUser);

userRouter.delete("/user/delete/:id", deleteUserById);

userRouter.put("/user/upade/:id",updateUserById);

export {userRouter};
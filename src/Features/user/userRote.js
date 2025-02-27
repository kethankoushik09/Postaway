import express from "express";
import UserController from "./userController.js";

const userRoute = express.Router();

const userObj = new  UserController();

userRoute.post("/signup" ,userObj.register)

userRoute.post("/signin",userObj.login)




export {userRoute};
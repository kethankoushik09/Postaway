import UserModel from "./userModel.js";
import { CustomErrorHandler } from "../../Error/Errorhandling.js";
import jwt from "jsonwebtoken";

class UserController{
    register(req,res){
        const { name, email, password } = req.body;
        UserModel.registerUser(name, email, password);
        res.status(201).send("registered successfully!");
    }

    login(req,res){
        const {email,password} = req.body;
        const result = UserModel.loginUser(email,password);
        if(result.success){
            const token = jwt.sign(
                {userId:email,name:result.user.name},
               "DTcyxqp0JKXxuVljj7SxMKoy4yKaHjtt",
               {expiresIn:"7h"} 
            )
            return res.send(token);
        }
        return next(new CustomErrorHandler(result.msg,401));
    }


}

export default UserController;
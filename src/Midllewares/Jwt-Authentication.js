import { CustomErrorHandler } from "../Error/Errorhandling.js";
import jwt from "jsonwebtoken";

const jwtauthentication = (req, res, next)=>{
    const token = req.headers['authorization'];

    if(!token){
        throw new CustomErrorHandler("unauthorized",401);
    }
    try{
        const payload = jwt.verify(
            token,
            "DTcyxqp0JKXxuVljj7SxMKoy4yKaHjtt"
        );
        // console.log(payload);
        req.user = payload;
        
    } catch(err){
        console.log(err);
        throw new CustomErrorHandler("unauthorized",401);
    }

    next();
};



export default jwtauthentication;
import Postmodel from "./postModel.js";
import UserModel from "../user/userModel.js";
import { CustomErrorHandler } from "../../Error/Errorhandling.js";


export default class Postcontroller{

    addpost(req,res){
        const {userId} = req.user;
        const {caption,imageUrl} = req.body;
        console.log(UserModel.getAllUsers());
        const verify = UserModel.getAllUsers().findIndex((u)=>u.email === userId);
        // console.log(verify);
        
        if(verify === -1){
            console.log("yes");
            return next(new CustomErrorHandler("User not found", 401));
        }
        const result = Postmodel.createpost(userId,caption,imageUrl);
        console.log(result);
        res.status(201).json({msg:"created..!",post:result});
    }


    getallposts(req,res){
        const posts =   Postmodel.getAllPosts();
        res.status(200).json({posts});
    }


    getpostByid(req,res){
        const userId = req.params.id;
        const verify = UserModel.getAllUsers().findIndex((u)=>u.email === userId);

        if(verify === -1){
            return next(new CustomErrorHandler("User not found", 401));
        }
        const posts = Postmodel.getpostsbyid(userId);
        res.status(200).json({posts});
    }


    updatePost(req,res){
        const postid = Number(req.params.id); // coverting into number

        const index = Postmodel.getAllPosts().findIndex((u)=>u.id === Number(postid));
        if(index === -1){
            return next(new CustomErrorHandler("post not found", 401));
            
        }
        const updatedpost = Postmodel.updatePost(index,req.body,postid);
        res.status(201).json({updated:updatedpost});
    }


    deletePost(req,res){
        const postid = Number(req.params.id);
        const index = Postmodel.getAllPosts().findIndex((u)=>u.id === Number(postid));
        if(index === -1){
            return next(new CustomErrorHandler("post not found", 401));
            
        }
        const deletepost = Postmodel.deletepost(index);
        res.status(201).json({deletepost})
    } 

}
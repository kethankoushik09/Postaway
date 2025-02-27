import Commentmodel from "./commentModel.js";
import Postmodel from "../Post/postModel.js";
import { CustomErrorHandler } from "../../Error/Errorhandling.js";





export default class CommentController{

    addcomment(req,res,next){

        const {content} = req.body
        const postid = Number(req.params.id);
        const {userId} = req.user;
        const verify = Postmodel.getAllPosts().find((itm)=>itm.id === postid);
        if(verify){
            const post = Commentmodel.createComment(userId,postid,content);
            return res.status(201).json(post);
        }
        return next(new CustomErrorHandler("post not found",401))
    }


    removecomment(req,res,next){

        const  commentId = Number(req.params.id);
        try{
            const respond = Commentmodel.removeComment(commentId);
            res.status(200).send(respond);
        }
        catch(e){
            console.log(e.message);
            
        }

    }


    updatecomment(req,res,next){

        const commentId = Number(req.params.id);
        const {content} = req.body;
        try{
            const respond = Commentmodel.updateComment(commentId,content);
            res.status(200).send(respond);
        }
        catch(e){
            console.log(e.message);
            
        }

    }

    getcomment(req,res,next){

        const postid = Number(req.params.id);
        const verify = Postmodel.getAllPosts().find((itm)=>itm.id === postid);
        if(verify){
            const comments = Commentmodel.getCommentsForPost(postid);
            return res.status(201).json({comments});
        }
        return next(new CustomErrorHandler("post not found",401))

    }


    getallcomments(req,res,next){

        const resp = Commentmodel.getAllcomments();
        res.status(200).json({comments:resp})
    }


}
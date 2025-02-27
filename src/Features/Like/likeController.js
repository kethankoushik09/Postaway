import { CustomErrorHandler } from "../../Error/Errorhandling.js";
import Postmodel from "../Post/postModel.js";
import Likemodel from "./likeModel.js";


export default class Likecontroller{
    addlike(req,res,next){
        const postid = Number(req.params.id);
        const verify = Postmodel.getAllPosts().findIndex((itm)=>itm.id === postid);
        // console.log(verify);
        const {userId} = req.user;

        if(verify ==-1){
            next(new CustomErrorHandler("post not found",401));
        }

        const result = Likemodel.addLike(userId,postid);
        res.status(200).json({result:result});
    }


    removelike(req,res,next){
        const postid = Number(req.params.id);
        const {userId} = req.user;
        const verify = Postmodel.getAllPosts().findIndex((itm)=>itm.id === postid);
        if(verify === -1){
            next(new CustomErrorHandler("post not found",401));
        }
        const result = Likemodel.removeLike(userId,postid);
        res.status(200).json(result);

    }

    getlikesforpost(req,res,next){
        const postid = Number(req.params.id);
        const verify = Postmodel.getAllPosts().findIndex((itm)=>itm.id === postid);
        if(verify === -1){
            next(new CustomErrorHandler("post not found",401));
        }
        const result = Likemodel.getAllLikesForPost(postid);
        res.status(200).json({postlikes:result});
    }

    getallLikes(req,res){
        const likes = Likemodel.getAllLikes();
        return res.status(200).send(likes);
    }

    
}
import { CustomErrorHandler } from "../../Error/Errorhandling.js";


export default class Likemodel{

    constructor(id,userId,postId){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
    }


    static addLike(userId,postId){
        const idx = likes.findIndex((itm)=>itm.userId === userId && itm.postId === postId);
        if(idx !==-1){
            return {success:true,msg:"already added successfully"};
        }
        const newlike = new Likemodel(Date.now(),userId,postId);
        likes.push(newlike);

        return {success:true,msg:"Like added successfully"};
    }


    static removeLike(userId,postId,next){
        const idx = likes.findIndex((itm)=>itm.userId === userId && itm.postId === postId);
        if(idx === -1){
            return next(new CustomErrorHandler("like not found",401));
        }
        const like = likes[idx];
        likes.splice(idx,1);
        return {msg:"like deleted...!",like};
    }


    static getAllLikesForPost(postid){
        const postlikes = likes.filter((itm)=>itm.postId === postid);
        return postlikes;
    } 
    

    static getAllLikes(){
        return likes;
    }


}

const likes =[];
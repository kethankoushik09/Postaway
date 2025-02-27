import { CustomErrorHandler } from "../../Error/Errorhandling.js";


export default class Commentmodel{

    constructor(id,userId,postId,content){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }


    static createComment(userId,postId,content){
        const newComment = new Commentmodel(comments.length+1,userId,postId,content);
        comments.push(newComment);
        return {mag:"comment created..!",comment:newComment};
    }


    static removeComment(commentId){
        const idx = comments.findIndex((itm)=>itm.id === commentId);
        if( idx >=0){
            const commnet = comments[idx];
            comments.splice(idx,1);
            return {msg:"deleted",commnet};
        }
        throw new CustomErrorHandler("comment not found",401);
    }


    static updateComment(commentId,content){
        const idx = comments.findIndex((itm)=>itm.id === commentId);
        if( idx >=0){
            comments[idx].content  = content;
            return {msg:"updated....!",comment:comments[idx]};
            
        }
        throw new CustomErrorHandler("comment not found",401);
    }


    static getCommentsForPost(postid){
        const postcomments = comments.filter((itm)=>itm.postId === postid);
        return postcomments;
    }

    static getAllcomments(){
        return comments;
    }

}


const comments = [];

Commentmodel.createComment("kethan09@gmail.com",1,"great..!");
Commentmodel.createComment("sindhu14@gmail.com",1,"good....!");
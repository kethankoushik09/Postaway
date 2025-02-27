import { users } from "../user/userModel.js";

export default class Postmodel{
    constructor(id,userid,caption,imageUrl){
        this.id = id;
        this.userid = userid;
        this.caption = caption;
        this.imageUrl = imageUrl;
    }

    static createpost(userid,caption,imageUrl){
        const newPost = new Postmodel(posts.length+1,userid,caption,imageUrl); 
        posts.push(newPost);
        return newPost;

    }
    static getAllPosts(){
        return posts;
    }

    static getpostsbyid(id){
        const result = posts.filter((itm)=>itm.userid === id );
        return result;
    }

    static updatePost(index,newdata,id){
        posts[index] = {id,...newdata}
        return posts;
    }

    static deletepost(index){
        const del_post = posts[index];
        posts.splice(index,1);
        return del_post;
    }

    
}
const posts = []


Postmodel.createpost("kethan09@gmail.com","first","https://firstimg.com")
Postmodel.createpost("sindhu14@gmail.com","secound","https://secoundimg.com")


import express from "express";
import Postcontroller from "./postController.js";

const postObj = new Postcontroller();

const postRoute = express.Router();




postRoute.post("/addpost",postObj.addpost);

postRoute.get("/",postObj.getallposts);

postRoute.get("/:id",postObj.getpostByid);
    
postRoute.put("/:id",postObj.updatePost);

postRoute.delete("/:id",postObj.deletePost);








export default postRoute;
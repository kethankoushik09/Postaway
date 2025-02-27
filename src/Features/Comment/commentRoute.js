import express from "express";
import CommentController from "./commentController.js";

const commentRoute = express.Router();
const commentObj = new CommentController();




commentRoute.get("/",commentObj.getallcomments)

commentRoute.post("/:id",commentObj.addcomment);

commentRoute.get("/:id",commentObj.getcomment);

commentRoute.delete("/:id",commentObj.removecomment);

commentRoute.put("/:id",commentObj.updatecomment);




export default commentRoute;





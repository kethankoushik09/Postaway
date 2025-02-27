import express from "express";
import Likecontroller from "./likeController.js";

const likeObj = new Likecontroller();

const likeRoute = express.Router();




likeRoute.post("/:id",likeObj.addlike);

likeRoute.delete("/:id",likeObj.removelike);

likeRoute.get("/postlikes/:id",likeObj.getlikesforpost)

likeRoute.get("/",likeObj.getallLikes);






export default likeRoute;
import express from "express";
import swagger from "swagger-ui-express";
import { userRoute } from "./src/Features/user/userRote.js";
import postRoute from "./src/Features/Post/postRote.js";
import commentRoute from "./src/Features/Comment/commentRoute.js";
import errorHandler from "./src/Error/Errorhandling.js";
import jwtauthentication from "./src/Midllewares/Jwt-Authentication.js";
import likeRoute from "./src/Features/Like/likeRoute.js";
import apiDocs from "./swagger.json" with {type: "json"};
import loggermiddleware from "./src/Midllewares/loggerMiddleware.js";



const server = express();

server.use(express.json());

server.use(loggermiddleware);

server.use("/api-docs",swagger.serve,swagger.setup(apiDocs));

server.use("/api/user",userRoute);

server.use("/api/post", jwtauthentication, postRoute);

server.use("/api/likes",jwtauthentication,likeRoute);

server.use("/api/comments",jwtauthentication,commentRoute);

server.get("/",(req,res)=>{
    res.send("Hello world!");
})
server.use(errorHandler);


export {server};


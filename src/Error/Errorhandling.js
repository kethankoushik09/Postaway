export class CustomErrorHandler extends Error{
    constructor(msg,code){
        super(msg);
        this.code = code;
    }
} 

const errorHandler = (err,req,res,next) =>{
    if(err instanceof CustomErrorHandler){
        res.status(err.code).send(err.message);
    }
    res.status(500).send("Something went wrong, please try later");
}

export default errorHandler;
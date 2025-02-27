import { format, transports } from "winston";
import winston from "winston";

const logger = winston.createLogger({
    level:"info",
    format:winston.format.json(),
    transports:[
        new winston.transports.File({filename:"track.log"})
    ]

})

const loggermiddleware = async(req,res,next)=>{
    const logdata = `req URL :${req.url}\n reqbody:${JSON.stringify(req.body)}`
    logger.info(logdata);
    next();
}
export default loggermiddleware;
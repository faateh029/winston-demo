import winston from 'winston';

const {format} = winston;
const {combine , timestamp , json , prettyPrint , errors} = format;

const logger = winston.createLogger({
    level:'info', //global minimum level for all transports , acts as a master filter for all logs . this means only levels of the default and above will be logged . no logs with level bellow the default level will be logged
    format:combine(
        errors({stack:true}), //stack shows the complete execution path towards the error
        timestamp(),
        json(),
        prettyPrint()
           // printf((info)=> `${info.timestamp}  ${info.level} : ${info.message}`) 
    ),
    transports:[
        new winston.transports.Console(),
        //new winston.transports.File({filename:'app.log' , level:'error'})
    ]
})
const requestLog = {method:"GET",isAuthenticated:"Yes"}; //adding custom loggin in the log messages
const childLogger = logger.child(requestLog);
childLogger.info("An info level log" , new Error);
childLogger.error("errors are logged here" , new Error);
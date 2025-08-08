import winston from 'winston';

const logger = winston.createLogger({
    level:'info', //global minimum level for all transports , acts as a master filter for all logs . this means only levels of the default and above will be logged . no logs with level bellow the default level will be logged
    format:winston.format.json(),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:'app.log' , level:'error'})
    ]
})
logger.info("An info level log");
logger.error("errors are logged here");
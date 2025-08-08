import winston from 'winston';
import './loggers.js';

const OrderLogger = winston.loggers.get('OrderLogger');
const PaymentLogger = winston.loggers.get('PaymentLogger');

// // Test OrderLogger
// OrderLogger.info('This should appear in console');
// OrderLogger.error('This should appear in console and Orders.log', new Error('Test error'));

// // Test PaymentLogger
// PaymentLogger.info('Payment system started');
// PaymentLogger.error('Payment failed', { transactionId: 12345 });

const renderPath = (path)=>{
    const profiler = PaymentLogger.startTimer();
    const one_billion = 10000000000 ;
    for(let i=0;i<one_billion;i++){
        
        let j = i*2
    }
    profiler.done({msg:`Profiling done with the path ${path}`});
}

renderPath('/payment');


// const {format} = winston;
// const {combine , timestamp , json , prettyPrint , errors} = format;

// const logger = winston.createLogger()
// const requestLog = {method:"GET",isAuthenticated:"Yes"}; //adding custom loggin in the log messages
// const childLogger = logger.child(requestLog);
// childLogger.info("An info level log" , new Error);
// childLogger.error("errors are logged here" , new Error);
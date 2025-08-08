import winston from 'winston';
const {format} = winston;
const {timestamp , combine ,printf,prettyPrint, json, errors} = format;


// // Initialize the default logger (important for containers)
// winston.configure({
//     transports: [new winston.transports.Console()]
// });

// Create OrderLogger
winston.loggers.add('OrderLogger', {
    level: 'info',
    format: combine(
        errors({ stack: true }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        json(),
        printf(info => {
            const stack = info.stack ? `\nStack: ${info.stack}` : '';
            return `${info.timestamp} [${info.level}] ${info.message} ${stack}`;
        })
    ),
    transports: [
        new winston.transports.Console({
            format:  prettyPrint()
        }),
        new winston.transports.File({
            filename: 'Orders.log',
            level: 'error',
            format: json()
        })
    ],
    defaultMeta: { service: "Order service" },
    exitOnError: false
});

// Create PaymentLogger
winston.loggers.add('PaymentLogger', {
    level: 'info',
    format: combine(
        timestamp(),
        json(),
        printf(info => `${info.timestamp} [${info.level}] ${info.message}`)
    ),
    transports: [
        new winston.transports.Console({
            format:  prettyPrint()
        }),
        new winston.transports.File({
            filename: 'Payment.log',
            format: json()
        })
    ],
    defaultMeta: { service: "Payment service" },
    exitOnError: false
});
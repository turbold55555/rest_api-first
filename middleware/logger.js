// Middleware Бичиж үзье  middleware bol function (req,res, next gesen 3 argumenttei);
const logger = (req, res, next) =>{
    req.userId = 'asdfg3453gdsfgdsfs231245';
    // console.log(`${req.method} ===> ${req.protocol}://${req.host}${req.originalUrl}`);
    next();
}

module.exports=logger;
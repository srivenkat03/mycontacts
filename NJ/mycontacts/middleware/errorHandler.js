const constants=require("../constants")
const errorHandler=(err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case 401:
            res.json({title:"Not found",message: err.message, stackTrace: err.stack});
            break;
    
        case 402:
            res.json({title:"unauthorized access",message: err.message, stackTrace: err.stack});
            break;    

        case 403:
            res.json({title:"fobidden content",message: err.message, stackTrace: err.stack});
            break;

        case 404:
            res.json({title:"not_found",message: err.message, stackTrace: err.stack});
            break; 

        case 500:
            res.json({title:"server_error",message: err.message, stackTrace: err.stack});
            break;            
    }
};

module.exports=errorHandler;
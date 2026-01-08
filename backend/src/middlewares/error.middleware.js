const errorHandler = async (err , req , res , next ) => {

    const statusCode = err.statusCode || 500 ; 

    const message = err.isOperational ? err.message : 'Internal Server Error ' ;

    return res
              .status(statusCode)
              .json({
                success : false , 
                message
              }) ;  

}

export default errorHandler ; 
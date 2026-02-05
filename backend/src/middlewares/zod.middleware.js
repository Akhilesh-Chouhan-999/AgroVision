import AppError from '../errors/app.error.js' ;
import log from '../utils/logger.utit.js';


export  const validate = (schema , property='body') => {
  return  (req , res , next ) => {
        try {
            schema.parse(req[property]) ; 
            next() ; 
        } 
        
        catch (error) {
            log(error) ; 
            
            return next(new AppError('Error in zod middleware '  , 400)) ;
        }
    }
} ;



import jwt from 'jsonwebtoken' ;
import  AppError from '../errors/app.error.js' ; 

const generateToken = (payload) => {

    if(!payload || typeof payload !== 'object'){
        throw new  AppError('JWT payload must be an object ' , 500) ;
    }

    if(!process.env.JWT_SECRET_KEY){
        throw new AppError('JWT secret key not configured' , 500) ;
    }

    if(!process.env.JWT_EXPIRES_IN){
        throw new AppError('JWT expiration is not configured ' , 500) ; 
    }

    return jwt
            .sign(
                payload ,
                process.env.JWT_SECRET_KEY ,
                {
                expiresIn : process.env.JWT_EXPIRES_IN ,
                algorithm : 'HS256'
                }
             ) ; 

} ; 

export default generateToken ; 
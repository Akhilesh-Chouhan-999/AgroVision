import { loginUser, registerUser } from "../services/auth.service.js"
import log from "../utils/logger.utit.js";

export const  register = async (req , res , next) => {
    try {
        
        const result = await registerUser(req.body) ; 

        res 
            .status(200)
            .json({
                success : true , 
                data : result 
            })
            
    } 
    
    catch (error) {

        log(error)
       next(error) ;   
    }
} ; 

export const login = async (req , res , next ) => {
    try {

        const result = await loginUser(req.body) ; 

         res 
            .status(201)
            .json({
                success : true , 
                data : result 
            }) ; 

    } 
    
    catch (error) {
        console.log(error);
        next(error) ; 
    }
} ;
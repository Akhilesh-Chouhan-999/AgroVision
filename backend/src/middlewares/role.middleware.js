import AppError from "../errors/app.error";

const restrictTo = ( ...roles) => {
    return (req , res , next ) => {

        if(!req.user || !req.user.role)
            return next(new AppError('Authentication Required' , 401)) ;
        
        const userRole = req.user.role.toUpperCase() ; 
        

        if(!roles.map( r => r.toUpperCase()).includes(userRole))  
            return next(new AppError('Access Denied'  , 403) ) ;   

        next() ; 
    }
    
}

export default restrictTo ; 
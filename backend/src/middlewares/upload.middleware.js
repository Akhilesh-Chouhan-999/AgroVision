import multer from 'multer' ; 
import path from 'path';
import AppError from '../errors/app.error.js' ;

const storage = multer.diskStorage({

    destination: (req , file , cb) => {

        cb(null , 'src/uploads/leaves');

    } , 

    filename : (req , file , cb) => {

        const uniqueName = Date.now() + Math.round(Math.random() * 1e9) ;

        cb(null 
            , uniqueName + path.extname(file.originalname)
        ) ; 
    } ,

}) ;

const fileFilter = (req , file , cb ) => {
    
    const allowedTypes = ['image/jpeg' , 'image/png' , 'image/jpg'] ; 

    if(!allowedTypes.includes(file.mimetype)){
        return cb(
            new AppError("Only JPG, JPEG, PNG images are allowed", 400),
            false
        ) ;
    }

    cb(null , true) ; 

} ; 



const upload = multer({

    storage,

    limits :{
        fileSize: 5 * 1024 * 1024, 
    } ,

    fileFilter,
}) ; 


export default upload ; 
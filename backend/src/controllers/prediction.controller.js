import AppError from '../errors/app.error.js' ; 
import { createPredictionService } from '../services/prediction.service.js';

export const uploadLeafImage = async (req , res , next) => {
 
    try {
        
        if(!req.file){
            throw new AppError('Image file is required' , 400) ; 
        }

        const {cropId } = req.body ;

        if(!cropId){
            throw new AppError('CropId is required' , 400)   ; 
        }

        const prediction = await createPredictionService({
            userId : req.user.id ,
            cropId ,
            imagePath : req.file.path ,
        }) ;


        res.status(201).json({
            success : true ,
            message : 'Leaf image uploaded successfully ' ,
            imagePath : req.file.path  ,
            data : prediction
        }) ; 


    } catch (error) {
        
        next(error) ; 
    }
} ;



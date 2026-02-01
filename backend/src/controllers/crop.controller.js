import AppError from "../errors/app.error.js";
import { createCropService , getAllCropsService } from "../services/crop.service.js"


export const createCrop = async (req , res , next ) => {
    try {
        
        const crop = await createCropService(req.body) ; 

        res.status(201).json({
            success : true , 
            data : crop  
        }) ; 

    }
    
    catch (error) {
        next(new AppError('Error in Crop Controller or Service  ' , 400)) ; 
    }
} ; 

export const getAllCrops = async (req , res , next ) => {
    try {
    
     const crops = await getAllCropsService() ;
    
    res.status(200).json({
        success : true , 
        data : crops
    });
    
    } 
    
    catch (error) {
       next(new AppError('Error in Crop Controller or Service  ' , 400)) ; 
    }
}


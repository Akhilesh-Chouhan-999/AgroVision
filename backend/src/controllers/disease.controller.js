import { createDiseaseService, getDiseaseByCropService } from "../services/disease.service.js"
import AppError from "../errors/app.error.js";

export const createDisease = async (req , res , next) => {
   try {
     const disease = await createDiseaseService(req.body) ; 

    res.status(201).json({
        sucess : true , 
        data : disease 
    }) ; 

   } catch (error) {
      next(new AppError('Error in Disease Controller or Service  ' , 400)) ;  
   }
}

export const getDiseasesByCrop = async (req , res , next) => {
    try {
        
        const disease = await getDiseaseByCropService(req.params.cropId) ; 

        res.status(200).json({
            success : true , 
            data : disease
        })
    } catch (error) {
        next(new AppError('Error in Disease Controller or Service  ' , 400)) ; 
    } 
} ; 



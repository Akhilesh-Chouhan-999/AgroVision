import { createDiseaseService, getDiseaseByCropService } from "../services/disease.service.js"
export const createDisease = async (req , res , next) => {
   try {
     const disease = await createDiseaseService(req.body) ; 

    res.status(201).json({
        sucess : true , 
        data : disease 
    }) ; 

   } catch (error) {
     next(error) ; 
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
        next(error) ; 
    } 
} ; 



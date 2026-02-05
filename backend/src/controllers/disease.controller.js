import { createDiseaseService, deleteDiseaseService, getDiseaseByCropService, updateDiseaseService } from "../services/disease.service.js"
import AppError from "../errors/app.error.js";
import log from "../utils/logger.utit.js";


export const createDisease = async (req, res, next) => {
    try {
        const disease = await createDiseaseService(req.body);

        res.status(201).json({
            sucess: true,
            data: disease
        });

    } catch (error) {

        console.log(error);
        next(new AppError('Error in Disease Controller or Service  ', 400));
    }
}

export const getDiseasesByCrop = async (req, res, next) => {
  try {

    const { cropId } = req.body;

    log(cropId)

    if (!cropId) {
      return next(new AppError("cropId is required", 400));
    }

    const diseases = await getDiseaseByCropService(cropId);

    res.status(200).json({
      success: true,
      data: diseases,
    });
  }
  
  catch (error) {
    next(new AppError("Error fetching diseases", 400));
  }
};


export const deleteDisease = async (req , res , next) => {
  try {
    await deleteDiseaseService(req.params.id) ; 

    res 
        .status(200)
        .json({
          success : true , 
          message : " Disease deleted "
        })

  }
  catch(error ){
    throw next(new AppError(402 , 'Error in deleting a disease ')) ; 
  }
} ; 


export const updateDisease = async ( req , res , next ) => {
  try {
    const disease = await updateDiseaseService(req.params.id , req.body) ;
    res
        .status(200)
        .json({
          success : true , 
          data : disease
        }) ;


  } catch (error) {
    log(error)
    next(new AppError(403 , ' Error while updating the disease ') ) ; 
  }
} ; 

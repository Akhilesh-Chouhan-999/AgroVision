import Prediction from "../models/prediction.model.js" ; 


export const createPredictionService = async ({
    userId , 
    cropId , 
    imagePath ,
}) => {
    return await Prediction.create({
        user : userId ,
        crop : cropId,
        imagePath,
    });
} ; 
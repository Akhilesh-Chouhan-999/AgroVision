import Prediction from "../models/prediction.model.js" ; 
import Crop from "../models/crop.model.js";
import AppError from "../errors/app.error.js";
import { callMLService } from "../integrations/ml.client.js";
import Disease from "../models/disease.model.js";
import { getAdvisoryForDisease } from "./advisory.service.js";


export const runPredictionPipeline = async({
    predictionId ,
    imagePath ,
    cropId
}) => {

    const crop = await Crop.findById(cropId) ;

    if(!crop)
    throw new AppError('Invalid Crop') ; 


    const mlResult = await callMLService({
        imagePath , 
        crop : crop.name
    }) ; 

    if(!mlResult || !mlResult.success){
     
        await Prediction.findByIdAndUpdate(predictionId , {
            confidence : 0 ,
            severity : 'LOW'
        }) ;

        return {
            disease : 'Unable to detect disease ' ,
            confidence : 0 ,
            severity : 'LOW' , 
            message : 'ML Service unavailable . Try again letter. '
        } ; 

    }

    const {label , confidence} = mlResult.prediction ; 
    const severity = mlResult.severity ;


    if(confidence < 0.6){
        await Prediction.findByIdAndUpdate(predictionId , {
            confidence ,
            severity ,
        }) ; 

        return { 
            disease : 'Uncertain detection' ,
            confidence,
            severity,
            message: 'Image quality insufficient . Please upload clearer image.'
        } ; 

    }



    const disease = await Disease.findOne({
        name : label ,
        crop : cropId ,
    }) ; 


    if(!disease){

        await Prediction.findByIdAndUpdate(predictionId , {
            confidence ,
            severity
        }) ; 

        return {
            disease : label ,
            confidence ,
            severity ,
            message : 'Disease detected but not yet in adviosry database .'
        }
    } ;

    
    const adviosry = await getAdvisoryForDisease({
            diseaseId : disease._id ,
            severity ,
        }) ; 


    await Prediction.findByIdAndUpdate(predictionId, {
        disease : disease._id ,
        confidence ,
        severity ,
    }) ; 


    return {
        disease : disease.name ,
        confidence ,
        severity ,
        adviosry ,
    } ;


}


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
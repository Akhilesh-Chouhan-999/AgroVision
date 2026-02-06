import AppError from '../errors/app.error.js' ; 
import { predictionQueue } from '../queues/prediction.queue.js';
import { createPredictionService, runPredictionPipeline } from '../services/prediction.service.js';

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

        await predictionQueue.add('RUN_ML' , {
            predictionId : prediction._id ,
            imagePath : req.file.path,
            cropId
        }) ; 

        res
            .status(202)
            .json({
            success: true,
            message: "Prediction queued for processing",
            predictionId: prediction._id,
            status: prediction.status,
         });

        // const result = await runPredictionPipeline({
        //     predictionId : prediction._id ,
        //     imagePath : req.file.path ,
        //     cropId 
        // }) ;


        // res.status(201).json({
        //     success : true ,
        //     message : 'Leaf image uploaded successfully ' ,
        //     imagePath : req.file.path  ,
        //     data : result ,
        // }) ; 


    } catch (error) {
        
        next(error) ; 
    }
} ;



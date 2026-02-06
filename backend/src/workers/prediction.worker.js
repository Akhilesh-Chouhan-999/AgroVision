import { Worker } from "bullmq";
import {redis} from '../configs/redis.config.js' ;
import Prediction from "../models/prediction.model.js";
import { runPredictionPipeline } from "../services/prediction.service.js";

const predictionWorker = new Worker("prediction-queue", async job => {
  
    const { predictionId, imagePath, cropId } = job.data;

    await Prediction.findByIdAndUpdate(predictionId, {
      status: "PROCESSING",
      errorMessage: null,
    });
    

    try {
    
      await runPredictionPipeline({
        predictionId,
        imagePath,
        cropId,
      });

      await Prediction.findByIdAndUpdate(predictionId, {
        status: "COMPLETED",
      });

    } 
    
    catch (error) {

      await Prediction.findByIdAndUpdate(predictionId, {
        status: "FAILED",
        errorMessage: error.message,
      });

      throw error; 
    }
  },
  {
    connection: redis,
    concurrency: 2,          // how many jobs in parallel
    attempts: 3,             // retry count
    backoff: {
      type: "exponential",
      delay: 3000,
    },
  }
);

predictionWorker.on("completed", job => {
  console.log(` Prediction job ${job.id} completed`);
});

predictionWorker.on("failed", (job, err) => {
  console.error(`Prediction job ${job.id} failed:`, err.message);
});

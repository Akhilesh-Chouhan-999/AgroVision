import {Queue} from 'bullmq' ; 
import { redis } from '../configs/redis.config.js' ;

export const predictionQueue = new Queue('prediction-queue' , {
    connection : redis , 
}) ; 


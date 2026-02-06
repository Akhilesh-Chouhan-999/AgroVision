import express from 'express' ; 
import protect from '../middlewares/auth.middleware.js';
import upload from '../middlewares/upload.middleware.js' ; 
import { uploadLeafImage } from '../controllers/prediction.controller.js';
import { getPredictionStatus } from '../controllers/prediction.status.controller.js';

const router = express.Router() ; 

router.post(
    '/' ,
    protect ,
    upload.single('image'),
    uploadLeafImage 
) ; 


router.get(
    '/:id/status' ,
    protect ,
    getPredictionStatus
)
export default router ; 
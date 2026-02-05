import express from 'express' ; 
import protect from '../middlewares/auth.middleware.js';
import upload from '../middlewares/upload.middleware.js' ; 
import { uploadLeafImage } from '../controllers/prediction.controller.js';

const router = express.Router() ; 

router.post(
    '/' ,
    protect ,
    upload.single('image'),
    uploadLeafImage 
) ; 

export default router ; 
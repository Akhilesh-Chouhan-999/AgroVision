import express from 'express';
import protect from '../middlewares/auth.middleware.js' ; 
import restrictTo from '../middlewares/role.middleware.js' ;
import { createCrop, getAllCrops } from '../controllers/crop.controller.js';
import { validate } from '../middlewares/zod.middleware.js';
import { createCropSchema } from '../validators/crop.validator.js';


const router = express.Router() ; 

router.post(
    '/createCrop' ,
     protect , 
     restrictTo('ADMIN') , 
     validate(createCropSchema) , 
     createCrop
) ;

router.get(
    '/getAllCrops' , 
    protect , 
    getAllCrops
) ; 

export default router ;


import express from 'express';
import protect from '../middlewares/auth.middleware.js' ; 
import restrictTo from '../middlewares/role.middleware.js' ;
import { createCrop, getAllCrops } from '../controllers/crop.controller.js';


const router = express.Router() ; 



router.post('/' , protect , restrictTo('ADMIN') , createCrop) ; 
router.get('/' , protect , getAllCrops) ; 

export default router ; 


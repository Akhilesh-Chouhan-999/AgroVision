import express from 'express' ; 
const router = express.Router() ; 

import protect from '../middlewares/auth.middleware.js' ; 
import restrictTo from '../middlewares/role.middleware.js' ;
import { createDisease, getDiseasesByCrop} from '../controllers/disease.controller.js'

router.post('/' , protect , restrictTo('ADMIN') , createDisease  ) ;
router.get('/:CropId' , protect , getDiseasesByCrop) ; 

export default router ; 


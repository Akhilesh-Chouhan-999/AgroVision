import express from 'express' ; 
const router = express.Router() ; 

import protect from '../middlewares/auth.middleware.js' ; 
import restrictTo from '../middlewares/role.middleware.js' ;
import { createDisease, deleteDisease, getDiseasesByCrop, updateDisease} from '../controllers/disease.controller.js'
import { validate } from '../middlewares/zod.middleware.js';
import { createDiseaseSchema } from '../validators/disease.validator.js';
import { updateCropSchema } from '../validators/crop.validator.js';

router.post('/' , 
    protect , 
    restrictTo('ADMIN') , 
    validate(createDiseaseSchema) ,  
    createDisease 
) ;


router.post(
    '/filter', 
    protect ,
    getDiseasesByCrop
);


router.delete(
  "/:id",
  protect,
  restrictTo("ADMIN"),
  deleteDisease
);

router.patch(
    '/:id' , 
    protect , 
    restrictTo('ADMIN') , 
    validate(updateCropSchema) ,
    updateDisease 
);

export default router ; 


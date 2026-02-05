import Crop from "../models/crop.model.js";

import AppError from '../errors/app.error.js';

export  const createCropService = async (data) => {
    
    const existing = await Crop
                               .findOne({ 
                                        name : data.name
                                        }) ;

       if(existing){
        throw new AppError('Crop already exists' , 409 ) ;
       }   
       
       await Crop.create(data) ; 

} ; 


export  const getAllCropsService = async () => {

    return await Crop.find().sort({name : 1}) ; 

} ; 


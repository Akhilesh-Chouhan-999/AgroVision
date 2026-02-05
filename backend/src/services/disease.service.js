import Disease from '../models/disease.model.js';

export const createDiseaseService = async (data) => {
    return await Disease.create(data);
} ;

export const getDiseaseByCropService = async (cropId) => {
  
    return await Disease
                      .find({ 
                        crop: cropId
                       }).populate("crop", "name"); 
};


export const deleteDiseaseService = async (id) => {
    return await Disease
                        .findByIdAndDelete(id) ; 
};

export const updateDiseaseService = async(id , data) => {
    return await Disease.findByIdAndUpdate(id , data , {
        new : true
    })
} ;


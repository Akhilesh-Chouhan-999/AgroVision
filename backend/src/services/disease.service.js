import Disease from '../models/disease.model.js';

export const createDiseaseService = async (data) => {

    return await Disease.create(data);

}



export const getDiseaseByCropService = async (cropId) => {
    return await Disease
                        .find({
                            crop: cropId
                        })
                        .populate('crop', 'name');
};


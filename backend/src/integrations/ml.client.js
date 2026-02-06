import axios from 'axios' ; 

const ML_BASE_URL = 'http://127.0.0.1:8000' ;

export const callMLService = async ({imagePath , crop}) =>{
    try {
        
        const response = await axios.post(
            `${ML_BASE_URL}/predict` ,
            {
                image_path : imagePath ,
                crop ,
            } , 
            { timeout : 5000}
        ) ; 


        return response.data ; 


    } catch (error) {
        return null ; 
    }
}
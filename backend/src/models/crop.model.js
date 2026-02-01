import mongoose from 'mongoose' ; 

const cropSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true , 
        unique : true , 
        trim : true , 
        uppercase : true
    } , 

    seasons : {
        type : [ String ] , 
        enum : ['RABI', 'KHARIF', 'ZAID'],
        required : true 
    } , 
    
    growthStages : {
        type : [String ] , 
        enum: ['GERMINATION', 'VEGETATIVE', 'FLOWERING', 'HARVEST'], 
        required : true 
    } , 

    regions : {
        type : [String] , // district 
        default : [] ,
    } , 
} , 
{timestamps : true}

) ;

const Crop = mongoose.model('Crop' , cropSchema) ; 

export default Crop ; 


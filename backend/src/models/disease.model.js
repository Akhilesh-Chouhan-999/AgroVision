import mongoose from "mongoose";

const diseaseSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true , 
        trim : true
    } , 

    crop : {
        type : mongoose.Schema.Types.ObjectId , 
        ref: 'Crop' , 
        required : true ,
    } , 

    diseaseType : {
        type : String , 
        enum: ["FUNGAL", "BACTERIAL", "VIRAL", "PEST"],
      required: true,
    }  , 

    affectedStages : {
        type : [String] , 
        required : true , 
    }  , 


    symptoms : {
        type : [String] , 
        required : true , 
    } , 
    
} , 
{timestamps : true}
) ; 

const Disease = mongoose.model('Disease' , diseaseSchema) ; 
export default Disease ;
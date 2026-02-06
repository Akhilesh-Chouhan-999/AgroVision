import mongoose from 'mongoose' ; 

const predictionSchema = new mongoose.Schema({

    user : {
        type : mongoose.Schema.ObjectId ,
        ref : 'User' ,
        required : true ,
    } , 

    crop : {
        type : mongoose.Schema.ObjectId ,
        ref : 'Crop' ,
        required : true, 
    } , 

    imagePath : {
        type : String ,
        required : true , 
    } , 

    disease : {
        type : mongoose.Schema.ObjectId,
        ref : 'Disease',
        default : null ,
    } ,

    confidence : {
        type : Number ,
        default : null ,
    }  , 

    severity : {
        type : String , 
        enum : ['LOW' , 'MEDIUM' , 'HIGH'] , 
        default : null 
    } ,

    status : {
        type : String ,
        enum : ['PENDING' , 'PROCESSING' , 'COMPLETED' , 'FAILED'],
        default : 'PENDING'
    } ,

    errorMessage : {
        type : String ,
        default : null
    }

},
{ timestamps : true }
) ;

const Prediction = mongoose.model('Prediction' , predictionSchema) ;

export default Prediction ;
import mongoose from 'mongoose' ;

const userSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true , 
        trim : true ,
        minlength : 2 , 
        maxlength : 50 
    } , 

    phone : {
        type : String , 
        required : true , 
        unique : true ,
        trim : true 
    } , 

    password : {
        type : String , 
        required : true , 
        unique : true 
    } , 

    role : {
        type : String ,
        enum : ['FARMER' , 'ADMIN'] , 
        default : 'FARMER'
    }
}, 
{timestamps: true}
)


const User = mongoose.model('User' , userSchema) ; 
export default User ; 
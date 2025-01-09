import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String
    }

},{timeStamp:true});

const User = mongoose.model("User",userSchema);
export default User;
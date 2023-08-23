const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required: [true,"Please add the username"]
    },
    email:{
        type:String,
        required: [true,"please add the email address"],
        unique: [true,"email id already taken"]
    },
    password:{
        type:String,
        required: [true,"please set the password for the user account"]
    }
},{
    timestamps:true  } )

module.exports=mongoose.model("User",UserSchema)
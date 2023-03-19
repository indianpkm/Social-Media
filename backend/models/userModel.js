import mongoose from "mongoose";

const UserSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        firstname:{
            type:String,
            required:true
        },
        experience:{
            type:String
        },
        skill:{
            type:String
        },
        lastname:{
            type:String,
            required:true
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        profilePicture:String,
        coverPicture:String,
        about:String,
        livesIn:String,
        worksAt:String,
        relationship:String,
        followers:[],
        following:[]
    },
    {timestamps:true}
)

const UserModel=mongoose.model('users',UserSchema)

export default UserModel;

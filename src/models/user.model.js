import mongoose,{Schema, Types} from "mongoose";
import jwt from "jwt";
import bcrypt from "bcrypt";



const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true,
        },
            email:{
                type:String,
                required:true,
                unique:true,
                lowercase:true,
                trim:true,
            },
            fullname:{
                type:String,
                required:true,
                trim:true,
                index:true,
            },
            avatar:{
                type:String, //url
                required:true,

            },
            coverImage:{
                type:String,
            },
            watchHIstory:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"video",
            },
            password:{
                type:string,
                required:[true,'password is required'],

            },
            refreshToken:{
                type:string,
            }

    },
    {timestamps:true}
)

const saltRound = 10

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
       return next()
    }
    this.password = await bcrypt.hash(this.password,saltRound)
    next()  
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken = function(){
    jwt.sing({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname,
    },process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })
}
userSchema.methods.generateRefreshToken = function(){
    jwt.sing({
        _id:this._id,
      
    },process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
}
export const user =mongoose.model("user",userSchema)
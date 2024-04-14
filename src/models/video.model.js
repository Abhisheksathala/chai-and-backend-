import mongoose,{Schema} from "mongoose";


const  videoSchema = new Schema(
    {
        videoFile:{
            type:String, //cloudnary url
            required:true,
        },
        thumbnail:{
            type:String, //cloudnary url
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        discription:{
            type:String,
            required:true,
        },
        duration:{
            type:Number,
            required:true,
        },
        view:{
            type:Number,
            default:0,
        },
        isPublised:{
            type:Boolean,
            default:false,
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        }
    },
    {timestamps:true}
)



export const  video = mongoose.model("video",videoSchema);
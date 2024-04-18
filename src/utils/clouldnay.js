
import fs from "fs";
import {v2 as cloudinary} from 'cloudinary';
import { log } from "console";
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API, 
  api_secret: process.env.CLOUD_API_SECRET 
});

const uploadOncloud = async (localFilePath)=>{
try {
    if(!localFilePath) return null
    // uploadfiled on cloudnary 
const  responce =  await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
    // if file is upoladed
    console.log("file uploded on cloudnary",responce.url);
    return  responce;
} catch (error) {

    fs.unlinkSync(localFilePath) //remove the loccaly savedtepm files
   return  null
}
}
export {uploadOncloud }


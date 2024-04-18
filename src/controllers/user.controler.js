import asyncHandler from "./../utils/asyncHandler.js"
import {ApiError} from "./../utils/ApiErrror.js"
import {user} from "./../models/user.model.js"
import {uploadOncloud} from './../utils/clouldnay.js'
import {Apiresponce} from "./../utils/ApiResponce.js"



const registerUser = asyncHandler(async (req,res,next)=>{
   //getuser details ffrom fronttend
   //get validation the values are not  empty
   //cheack if user hasaccount alreaady exist user  name email say cheak karray
   //cheack for avater
   //upolad tthe to cloudnary,avter
   //create  user object - create entry in db
   //remove pass and refresh token filds from respons  
   //cheack for user creattions
   //returmn res
  //get user details from frontend

  const { fullname, email, username, password } = req.body;

  if (fullname === "") {
    throw new ApiError(400, "Fullname is required");
  }
  
  if (email === "") {
    throw new ApiError(400, "Email is required");
  }
  
  if (username === "") {
    throw new ApiError(400, "Username is required");
  }
  
  if (password === "") {
    throw new ApiError(400, "Password is required");
  }
  
const existinguser = await user.find({$or:[{username},{email}]})

if(existinguser){
    throw new ApiError(409,"User already exists")
}


const avaterLocalPath = req.files?.avater[0]?.path;
const coverLoacalPath = req.files?.coverImage[0]?.path;

if(!avaterLocalPath){
    throw new ApiError(400,"Avater is required")
}

const avater = await  uploadOncloud(avaterLocalPath)
const acoverimage = await  uploadOncloud(coverLoacalPath)
  // Continue with your code logic here...   
  if (!avater) {
    throw new ApiError(500, "Failed to upload files");
  }

const User = await user.create({
    fullname,
    email,
    username:username.toLowerCase('en-GB'),
    password,
    avater:avater.url,
    coverImage:acoverimage?.url || ""
})
const createdUser = await user.findById(User._id).select("-password  -refreshToken")
if(!createdUser){
    throw new ApiError(500,"Failed to create user")
}
return res.status(201).json(
  new Apiresponce(201,"User created successfully",createdUser)
)

})


export {registerUser}






// refreshToken
































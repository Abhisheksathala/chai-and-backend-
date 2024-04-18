
import dotenv from "dotenv"
import indexDB from "./db/indexDB.js";
import express from "express"
const app = express();

dotenv.config({
    path:"../env"
})
indexDB()
.then(()=>{
    app.listen(process.env.PORT  ||  8000 ,()=>{
        console.log("server started",`${process.env.PORT}`)
        
        app.on("error",(err)=>{
            console.log("APP GOT error:",err);
            throw err
        })
    })
})
.catch((err)=>console.log("MONGO DB CONNECTION FAILED",err))































/*;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("database connected")
        app.on("error",(err)=>{
            console.log("error:",err);
            throw err
        })
        app.listen(process.env.PORT,()=>{
            console.log("server started",`${process.env.PORT}`)
        })
    }
    catch(err){
        console.log("error:",err)
        throw err
    }
})()  */
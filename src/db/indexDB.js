import mongoose from "mongoose";
import {DB_NAME} from "./../constants.js"


 const indexDB = async()=>{
    try{
 const ConnectDBInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
 console.log("\N -CONNECTED TO MONGOdB FROM INDEXdb",ConnectDBInstance.connection.host)
    }
    catch(err){
        console.log("MONGODB CONNECTED !! DB HOST:",err)
        process.exit(1)
    }
}

export default indexDB;

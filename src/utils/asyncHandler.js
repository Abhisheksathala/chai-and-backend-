const asyncHandler =  (rquestHandler)=>{
    (res,res,next)=>{
        return new Promise((resolve, reject) => {
            resolve(rquestHandler(req,res,next)).catch((err)=>next(err))
        })
        
    }
}


export {asyncHandler}

// const asyncHandler =  (fn)=> async (req,res,next)=>{
//      try{
//      await fn(req,res,next);
//      }catch(err){
// res.status(err.code || 500).json({
//     success:false,
//     message:err.message
// })
//      }
// }
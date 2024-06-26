const asyncHandler =  (rquestHandler)=>{
    return (res,res,next)=>{
         new Promise((resolve, reject) => {
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
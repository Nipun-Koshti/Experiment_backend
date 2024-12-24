const asnycHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asnycHandler};


// const asyncHandler = () =>{}
// const asyncHandler = (func) =>{()=>{}}
// const asyncHandler = (func) =>async{()=>{}}

// const asyncHandler = (fn)=> async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         res.status(error.code||500).json({
//             sucess:false,
//             message:err.message

//         })
//     }

// }
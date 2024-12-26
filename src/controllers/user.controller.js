
import {asnycHandler} from "../utils/asyncHandler.js"

const registerUser = asnycHandler( async (req, res)=>{
    res.status(200).json({
        message:"ok"
    })
})


export {registerUser}
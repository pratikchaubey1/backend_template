const  models = require('../models/Tool');

const Gettodo = async(req,res)=>{
    try {
        const todo = await models.find({})
        res.status(200).json({
            success:true,
            data:todo,
            message:"Data fetched successfully",
           
        })
    } catch (e){
        console.log("error in fetching data");
        res.status(500).json({
            success:false,
            message:"Error in fetching data",
        })
    }
}

module.exports=Gettodo;
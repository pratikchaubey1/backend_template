const mongoose = require('mongoose');
require('dotenv').config();
const dbconnect =() =>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("mongoDB connect successfully"))
        .catch((err)=>console.log("mongoDB connection error",err))
}
module.exports=dbconnect;
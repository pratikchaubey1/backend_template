const mongoose = require('mongoose');
require('dotenv').config();
const dbconnect = () => {
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('MongoDB connect successfully'))
    .catch((err)=>console.log('MongoDB connection error:',err))
}
module.exports = dbconnect
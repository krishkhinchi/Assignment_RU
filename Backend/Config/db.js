const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/items";

function connectDB(){
    mongoose
        .connect(uri)
        .then(()=>console.log("Successfully connected to mongoDB"))
        .catch((err)=>console.log("Connection error", err))
}

module.exports = connectDB;
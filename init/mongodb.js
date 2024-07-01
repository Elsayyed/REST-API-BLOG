const mongoose = require("mongoose");
const {db_url} = require("../config/keys")

const connectMongoDb = async() =>{
    try {
        await mongoose.connect(db_url);
        console.log("Database Connected!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectMongoDb;
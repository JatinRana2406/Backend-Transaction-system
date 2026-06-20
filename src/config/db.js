const mongoose = require("mongoose")
const dns = require("dns")

dns.setServers(["1.1.1.1", "8.8.8.8"])

function connectDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Server is connected to DB")
    })
    .catch(err =>{
        console.log("Error connecting to DB")
        process.exit(1)
    })
}

module.exports = connectDb;
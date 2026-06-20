const app = require('./src/app')
require("dotenv").config()
const connectToDB = require("./src/config/db")

connectToDB();

app.listen(3000, (req, res) => {
    console.log("Server is running on http://localhost:3000")
})
const express = require('express')
const app = express()
var cors = require('cors')
const http = require("http");
require("dotenv").config();
app.use(cors())
app.use(express.json());
const connectDb  = require('./DBConnect/DBConnect')
const loginRoute = require("./Route/Login")
const userRoute = require("./Route/User")
const productRoute = require('./Route/Product')
connectDb()

app.use("/", userRoute)
app.use("/", loginRoute)
app.use("/", productRoute)



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
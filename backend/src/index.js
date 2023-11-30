const express = require('express')
const app = express()
var cors = require('cors')
const http = require("http");
require("dotenv").config();
app.use(cors())
app.use(express.json());
const connectDb  = require('./DBConnect/DBConnect')
const userRoute = require("./Route/Login")

connectDb()

app.use("/", userRoute)



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
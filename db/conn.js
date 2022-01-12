
require("dotenv").config()
const {MONGODB_URI}= process.env
const mongoose = require("mongoose")
const config = { useNewUrlParser: true, useUnifiedTopology: true }

/*----------------------------------
   Mongo Connection
----------------------------------*/
mongoose.connect(MONGODB_URI, config)

/*----------------------------------
   Events
----------------------------------*/
mongoose.connection
  .on("open",()=> console.log("Connected to mongo"))
  .on("close",()=> console.log("Disconnected from mongo"))
  .on("error", (error) => console.log(error))
  

  module.exports = mongoose
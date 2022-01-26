/*----------------------------------
   Dependencies
----------------------------------*/
require("dotenv").config();
const { PORT, NODE_ENV } = process.env;
const express = require("express");
const mongoose = require("../db/conn");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const corsOptions = require("../config/cors");
const { addListener } = require("nodemon");
const HomeRouter = require("../controllers/home");
const Trade_Router = require("../controllers/trade");
const Estimate_Router = require("../controllers/estimate")
//const verify = require("./verify");

/*----------------------------------
   Middleware
----------------------------------*/


const middleware = (app) => {
   //use public folder for static assets
   app.use(express.static("public"));
   app.use(NODE_ENV === "production" ? cors(corsOptions) : cors());
   //app.use(verify(process.env.CLIENT_ID))
   app.use(express.json()); // returns middleware that only parses JSON

  app.use(morgan("tiny"));
  //# routers
  app.use("/trade", Trade_Router)
  app.use("/estimate", Estimate_Router)
  app.use("/", HomeRouter)
}

module.exports = middleware
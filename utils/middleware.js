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
const SI_Router = require("../controllers/scopeItem");

/*----------------------------------
   Middleware
----------------------------------*/
app.use(NODE_ENV === "production" ? cors(corsOptions) : cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static("public"));

const middleware = (app) => {
  //use public folder for static assets
  app.use(express.static("public"));
  app.use(express.json()); // returns middleware that only parses JSON

  app.use(morgan("tiny"));
  //# routers
  app.use("/si", SI_Router)
  app.use("/", HomeRouter)
}

module.exports = middleware
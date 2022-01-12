/*----------------------------------
   Dependencies
----------------------------------*/

const scopeItem = require("../models/scopeItem");
const { Router } = require("express");
const router = Router();

/*----------------------------------
   Router
----------------------------------*/

module.exports = router;

/*----------------------------------
   Router Middleware
----------------------------------*/


/*----------------------------------
   Routes
----------------------------------*/
router.get("/", (req, res) => {
  res.send("home page")
})

module.exports = router

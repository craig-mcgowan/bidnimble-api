/*----------------------------------
   Dependencies
----------------------------------*/

const User = require("../models/user")
const { Router } = require("express")
const verify = require("../utils/verify")
const router = Router()

/*----------------------------------
   Router
----------------------------------*/




/*----------------------------------
   Router Middleware
----------------------------------*/
//todo auth middleware


/*----------------------------------
   Routes
----------------------------------*/

//# Index Route
router.get(`/api`, (req, res) => {
   console.log("user", req.user)
   res.json(req.user)
})

router.get(`/`, (req, res) => {
   res.json({"name": "bidNimble Auth Test"})
   res.json(req.user)
})


/*----------------------------------
   Export Router
----------------------------------*/
module.exports = router

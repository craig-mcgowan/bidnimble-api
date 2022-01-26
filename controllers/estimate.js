/*----------------------------------
   Dependencies
----------------------------------*/

const Estimate = require("../models/trade")
const { Router } = require("express")
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
router.get(`/`, async(req, res) => {
  const estimates = await Trade.find();
  res.json(estimates)
})

//# Destroy Route
router.delete(`/:id`, async (req, res) => {
  const { id } = req.params;
  await Estimate.findByIdAndDelete(id);
  res.json({message: `Estimate with id matching ${id} deleted`})
})

//# Update Route
router.put(`/:id`, async (req, res) => {
   const estimate = await Estimate.findByIdAndUpdate(req.params.id,
   req.body, { new: true });
   res.json(estimate)
  
})

//# Create Route
router.post(`/`, async (req, res) => {
  const estimate = await Estimate.create(req.body) 
  res.json(estimate)
  
})

//# Show Route
router.get(`/:id`, async (req, res) => {
  const estimate = await Estimate.findById(req.params.id);
  res.json(estimate);
});

/*----------------------------------
   Export Router
----------------------------------*/
module.exports = router

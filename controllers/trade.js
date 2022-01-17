/*----------------------------------
   Dependencies
----------------------------------*/

const Trade = require("../models/trade")
const { Router } = require("express")
const router = Router()

/*----------------------------------
   Router
----------------------------------*/

module.exports = router


/*----------------------------------
   Router Middleware
----------------------------------*/
//todo auth middleware


/*----------------------------------
   Routes
----------------------------------*/

//# Index Route
router.get(`/`, async(req, res) => {
  const trades = await Trade.find();
  res.json(trades)
})

//# Destroy Route
router.delete(`/:id`, async (req, res) => {
  const { id } = req.params;
  await Trade.findByIdAndDelete(id);
  res.json({message: `Trade with id matching ${id} deleted`})
})

//# Update Route
router.put(`/:id`, async (req, res) => {
   const trade = await Trade.findByIdAndUpdate(req.params.id,
   req.body, { new: true });
   res.json(trade)
  
})

//# Create Route
router.post(`/`, async (req, res) => {
  const trade = await Trade.create(req.body) 
  res.json(trade)
  
})


//# Show Route
router.get(`/:id`, async (req, res) => {
  const trade = await Trade.findById(req.params.id);
  res.json(trade);
});

/*----------------------------------
   Export Router
----------------------------------*/
module.exports = router

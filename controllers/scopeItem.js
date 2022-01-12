/*----------------------------------
   Dependencies
----------------------------------*/

const ScopeItem = require("../models/scopeItem")
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
  const scopeItems = await ScopeItem.find();
  res.json(scopeItems)
})

//# Destroy Route
router.delete(`/:id`, async (req, res) => {
  const { id } = req.params;
  await ScopeItem.findByIdAndDelete(id);
  res.json({message: `ScopeItem with id matching ${id} deleted`})
})

//# Update Route
router.put(`/:id`, async (req, res) => {
   const scopeItem = await ScopeItem.findByIdAndUpdate(req.params.id,
   req.body, { new: true });
   res.json(scopeItem)
  
})

//# Create Route
router.post(`/`, async (req, res) => {
  const scopeItem = await ScopeItem.create(req.body) 
  res.json(scopeItem)
  
})


//# Show Route
router.get(`/:id`, async (req, res) => {
  const scopeItems = await ScopeItem.findById(req.params.id);
  res.json(scopeItems);
});

/*----------------------------------
   Export Router
----------------------------------*/
module.exports = router

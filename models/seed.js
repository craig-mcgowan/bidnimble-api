/*----------------------------------
   Dependecies
----------------------------------*/

const { compareSync } = require("bcryptjs");
const mongoose = require("../db/conn");
const trade = require("./trade");

/*----------------------------------
   Seed Code
----------------------------------*/


// Make sure code is not run till connected
mongoose.connection.on("open", () => {
  // Run any database queries in this function
  const tradesArr = [
    {name: "Demolition", scopeSections: []},
    {name: "Sitework", scopeSections: []},
    {name: "Concrete", scopeSections: []},
    {name: "Masonry", scopeSections: []},
    { name: "Carpentry", scopeSections: [{ name: "Acoustical Ceilings", scopeItems: [] }, { name: "Framing and Drywall", scopeItems: [] }] },
    {name: "Millwork", scopeSections: []},
    {name: "Flooring", scopeSections: []},
    {name: "Glass and Glazing", scopeSections: []},
    {name: "Doors Frames and Hardware", scopeSections: []},
    {name: "Painting", scopeSections: []},
    {name: "Tile", scopeSections: []},
    {name: "Wallcovering", scopeSections: []},
    {name: "Metals", scopeSections: []},
    {name: "Toilet Partitions and Accessories", scopeSections: []},
    {name: "Folding Partitions", scopeSections: []},
    {name: "Window Treatments", scopeSections: []},
    {name: "Appliances", scopeSections: []},
    {name: "Mechanical", scopeSections: []},
    {name: "Fire Protection", scopeSections: []},
    {name: "Plumbing", scopeSections: []},
    {name: "Electric", scopeSections: []},
    {name: "Security", scopeSections: []},
    {name: "Teledata and AV", scopeSections: []}
  ]
  
  tradesArr.forEach(trade => {
    trade.laborRate = Math.floor(Math.random() * (150 - 60) + 60).toString()
    trade.userId = 1
    if (trade.scopeSections.length === 0) {
      trade.scopeSections.push({name: trade.name, scopeItems: []})
    }
    trade.scopeSections.forEach(section => {
      section.scopeItems
        .push(
          {
            item: "Day Rate", 
            unit: "DAYS",
            rate: (trade.laborRate*8).toString(),
          }
          )
    }
    )   
  })
  console.log(tradesArr)
  console.log(tradesArr[4])
  console.log(tradesArr[4].scopeSections)
  console.log(tradesArr[4].scopeSections[1].scopeItems)
  
  //Delete all trades
  trade.remove({}, (err, data) => {
    // Seed Starter Trades
    trade.create(tradesArr, (err, data) => {
      // log the create Trades to confirm
      console.log("data: "+ data);
      console.log("--------Trades CREATED----------");

      // close the DB connection
      mongoose.connection.close();
    });
  });
});

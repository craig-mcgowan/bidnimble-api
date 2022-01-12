/*----------------------------------
   Dependecies
----------------------------------*/

const mongoose = require("../db/conn");
const ScopeItem = require("./scopeItem");

/*----------------------------------
   Seed Code
----------------------------------*/


// Make sure code is not run till connected
mongoose.connection.on("open", () => {
  // Run any database queries in this function
  const scopeSection = [
    "Demolition",
    "Sitework",
    "Concrete",
    "Masonry",
    "Framing and Drywall",
    "Acoustical Ceilings",
    "Millwork",
    "Floor Prep and Leveling",
    "Flooring",
    "Glass and Glazing",
    "Doors Frames and Hardware",
    "Painting",
    "Tile",
    "Wallcovering",
    "Metals",
    "Toilet Partitions and Accessories",
    "Folding Partitions",
    "Window Treatments",
    "Appliances",
    "Mechanical",
    "Fire Protection",
    "Plumbing",
    "Electric",
    "Fire Alarm",
    "Security",
    "Teledata and AV"
  ]
  const startScopeItems = []
  
  scopeSection.forEach(section => {
    let trade = section
    if (section === "Framing and Drywall" || section === "Acoustical Ceilings") {
      trade = "Carpentry"
    }
    startScopeItems.push(
      {
        tradeName: trade, 
        scopeSection: section,
        scopeItem: "Labor",
        userId: 1,
        unit: "hr",
        rate: Math.floor(Math.random()*(150-60)+60)
      }
    )
    
  })
console.log(startScopeItems)

  // Delete all Scope Items
  ScopeItem.remove({}, (err, data) => {
    // Seed Starter Scope Items
    ScopeItem.create(startScopeItems, (err, data) => {
      // log the create Scope Items to confirm
      console.log(data);
      console.log("--------Scope Items CREATED----------");

      // close the DB connection
      mongoose.connection.close();
    });
  });
});

/*----------------------------------
   Dependencies
----------------------------------*/
const express = require("express")
const middleware = require("./utils/middleware")
const {PORT} = process.env


/*----------------------------------
    App Object
----------------------------------*/
const app = express()
middleware(app)

/*----------------------------------
   Listener
----------------------------------*/
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
})



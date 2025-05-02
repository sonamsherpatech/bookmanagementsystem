const express = require('express')
const bookRoute = require("./routes/bookRoute")
const app = express()

require("./database/connection")
app.use(express.json())
app.use("", bookRoute)

app.listen(4000, () => {
  console.log("Port is listening to 4000");
})
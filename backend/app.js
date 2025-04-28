const express = require('express')
const app = express()
const db = require('./database/connection')



app.get("/books", (req, res) => {
  // logic for readint the books from database

  res.json({
    message: "Book fetched successfully"
  })
})

app.post("/books", (req, res) => {
  //logic to post books

  res.json({
    message: "Inserted book sucessfully to the database"
  })
})

app.patch("/books/:id", (req, res) => {
  //logic to update books

  res.json({
    message: "Updated book successfully"
  })
})

app.delete("/books/:id", (req, res) => {
  //logic to delete books

  res.json({
    message: "Deleted Book successfully"
  })
})



app.listen(4000, () => {
  console.log("Port is listening to 4000");
})
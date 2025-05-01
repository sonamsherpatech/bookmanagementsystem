const express = require('express')
const { books } = require('./database/connection')
const app = express()

app.use(express.json())

app.get("/books", async (req, res) => {
  // logic for readint the books from database
  const datas = await books.findAll(); // Select * from books;, always returns array
  res.json({
    message: "Book fetched successfully",
    datas
  })
})

//test2

app.post("/books", async (req, res) => {
  //logic to post books
  console.log(req.body)
  // const bookName = req.body.bookName
  // const bookPrice = req.body.bookPrice

  const { booksName, bookPrice, bookAuthor, bookGenre } = req.body
  // console.log(bookName, bookPrice);

  //assignment check if all data aako xa vane only procced, else no t procced throw error
  if (booksName && bookPrice && bookAuthor && bookGenre) {
    await books.create({
      booksName, //colname : value
      bookPrice,
      bookAuthor,
      bookGenre
    })
  } else {
    console.log("provide missing fields");
  }


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
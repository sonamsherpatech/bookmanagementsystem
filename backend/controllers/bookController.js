const { books } = require("../database/connection")
exports.fetchBooks = async (req, res) => {
  // logic for readint the books from database
  const datas = await books.findAll(); // Select * from books;, always returns array
  res.json({
    message: "Book fetched successfully",
    datas
  })
}


exports.addBook = async (req, res) => {
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
    res.json({
      message: "provide missing fields"
    })
  }


  res.json({
    message: "Inserted book sucessfully to the database"
  })
}

exports.deleteBook = async (req, res) => {
  //logic to update books
  res.json({
    message: "Updated book successfully"
  })
}

exports.editBook = (req, res) => {
  //logic to delete books

  res.json({
    message: "Deleted Book successfully"
  })
}

exports.singleFetchBook = async function (req, res) {
  //first capture what id is he/she sending
  const id = req.params.id
  const datas = await books.findByPk(id)
  // const datas = await books.findAll({
  //   where: {
  //     id: id
  //   }
  // })

  res.json({
    message: "Single book fetched sucessfully",
    datas
  })
}

// module.exports = {fetchBooks, addBook, deleteBook, editBook}
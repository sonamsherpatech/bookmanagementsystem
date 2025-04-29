
// books, bookName, bookPrice, bookAuthor, bookGenre

const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    booksName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bookAuthor: {
      type: DataTypes.STRING,
      defaultValue: "Sonam Sherpa"
    },
    bookGenre: {
      type: DataTypes.STRING
    }
  })
  return Book
}

module.exports = bookModel

//hami yaha database connectionm ko code/logic lekhxau
const { Sequelize, DataTypes } = require('sequelize')
// const bookModel = require("./models/book.model")


const sequelize = new Sequelize(process.env.DATABASE_URL)

sequelize.authenticate()
  .then(() => {
    console.log("Authenticated vayo, connected!!");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/book.model")(sequelize, DataTypes)

// migration code
sequelize.sync({
  alter: true
})
  .then(() => {
    console.log("Successfully Migrated!!");
  })
module.exports = db

const userModel = (sequelize, DataTypes) => {
  const book = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  })
  return book
}

module.exports = userModel
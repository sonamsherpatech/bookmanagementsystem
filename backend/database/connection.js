
//hami yaha database connectionm ko code/logic lekhxau
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize("postgresql://postgres.ymqwgprrtzqapzlsyoft:I amthe savior of this world@aws-0-us-east-2.pooler.supabase.com:6543/postgres");

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


module.exports = db
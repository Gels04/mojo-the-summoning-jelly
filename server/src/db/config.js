// add your database connection here
const path = require("path");
const {Sequelize, Model} = require("sequelize");


const db = new Sequelize({ // creating a new database using Sequelize
    dialect: "sqlite", //using sqlite database
    storage: path.join(__dirname, "db.sqlite") //directing to the path of my database
});

module.exports = {
    Sequelize,
    db
};
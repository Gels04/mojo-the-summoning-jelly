const {Sequelize} = require("sequelize");
const {db} = require("../db/config.js");

const Card = db.define("Card", { // creating a template model for the Card table
    name: Sequelize.STRING,
    mojo: Sequelize.INTEGER,
    stamina: Sequelize.INTEGER,
    imgUrl: Sequelize.STRING
});

module.exports = {
    Card
}
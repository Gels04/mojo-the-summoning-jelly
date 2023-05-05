const {Sequelize} = require("sequelize");
const {db} = require("../db/config.js");

const Attack = db.define("Attack", { // creating a template model for "Attack" in the database
    title: Sequelize.STRING,
    mojoCast: Sequelize.INTEGER,
    staminaCost: Sequelize.INTEGER
});

module.exports = {
    Attack
}
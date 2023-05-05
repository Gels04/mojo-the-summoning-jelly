// create your User model here
const {Sequelize, db} = require("../db/config.js");

const User = db.define("User", { // creating a template model of User in the database
    username: Sequelize.INTEGER //didnt put id since sequelize uses id by default
})

module.exports = {
    User
}
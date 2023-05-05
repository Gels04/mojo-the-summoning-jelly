const { User } = require('./User');
const {Deck} = require("./Deck");
const {Card} = require("./Card");
const {Attack} = require("./Attack");
// import the rest of your models above

//set up the associations here
//had to double check how to write associations

//Card has a mant to many relationship with Attack
Card.belongsToMany(Attack, {through: "card-attack"});
Attack.belongsToMany(Card, {through: "card-attack"});
//Deck has a one to many relationship with Card
Deck.hasMany(Card);
Card.belongsTo(Deck);

//User has a one to one relationship with deck
User.hasOne(Deck);
Deck.belongsTo(User);



// and then export them all below
module.exports = { 
    User,
    Deck,
    Card,
    Attack
}

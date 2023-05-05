const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const {db} = require('../db/config')

// define in global scope
let deck;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'deck1', xp: 15 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

//tests check to see if Deck has the appropriate properties and values

describe("Deck", () => { //dont put async function in describe, only in test
    it("has an id", async () => {
        expect(deck).toHaveProperty("id");
    })
    it("has a name with a value of 'deck1'", async () => {
        expect(deck).toHaveProperty("name");
        expect(deck.name).toEqual('deck1');
    })
    it("has an xp with the value of 15", async () => {
        expect(deck).toHaveProperty('xp');
        expect(deck.xp).toEqual(15);
    })
})
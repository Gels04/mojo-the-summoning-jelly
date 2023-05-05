const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('.')
const {db} = require('../db/config')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'donkeyKong', mojo: 50, stamina: 3, imgUrl: "/Users/gelmigue/Bootcamp Journey/Projects/mojo-the-summoning-jelly/server/src/static/img/alaric-flamecaller.jpg" })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe("Card", () => {
    it('has an id', async () => {
        expect(card).toHaveProperty("id");
    })
    it('has a name with a value of "donkeyKong"', async () => {
        expect(card).toHaveProperty("name");
        expect(card.name).toBe("donkeyKong");
    })
    it("has a mojo with a value of 50", async () => {
        expect(card).toHaveProperty("mojo");
        expect(card.mojo).toBe(50);
    })
    it("has a stamina with the value of 3", async () => {
        expect(card).toHaveProperty("stamina");
        expect(card.stamina).toBe(3);
    })
})
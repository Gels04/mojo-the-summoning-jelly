const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const {db} = require('../db/config')

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('connection established', () => {
  it('is connected to the database', () => {
    expect(true).toBe(true);
  });

})

describe('DataBase', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })
  it('has a username', async () => {
    expect(user).toHaveProperty('username');
  })
  it('username has the value of "gandalf"', async () => {
    const user1 = await User.findByPk(1);
    expect(user1.username).toEqual("gandalf")
  })

})

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */


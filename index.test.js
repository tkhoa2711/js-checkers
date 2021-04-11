// const jest = require('jest')
const {
  Checkers,
  Piece,
  Player,
  Square
} = require('./index')

describe('initialisation', () => {
  describe('#Checkers', () => {
    const player1 = new Player('Bugs Bunny')
    const player2 = new Player('Daffy Duck')

    const game = new Checkers({ dimensionX: 8, dimensionY: 8 }, player1, player2)

    test('an empty game can be created', () => {
      expect(game).toBeDefined()
    })

    test.todo('a game has expected amount of pieces')
  })

  describe('#Square', () => {
    test('constructor', () => {
      const square = new Square({ x: 2, y: 4 })
    })

    test('a square is empty by default', () => {
      const square = new Square({ x: 2, y: 4 })

      expect(square.isEmpty()).toBeTruthy()
    })
  })

  test('#Piece', () => {
    const player = jest.fn()
    const piece = new Piece(player)

    expect(piece).toBeDefined()
  })

  test('a piece is not king by default', () => {
    const player = jest.fn()
    const piece = new Piece(player)

    expect(piece.isKing).toBe(false)
  })

  test('#Player', () => {
    const player = new Player('Bugs Bunny')

    expect(player).toBeDefined()
  })

  test('a player has a random string as ID', () => {
    const player = new Player('Bugs Bunny')

    expect(player.id).toEqual(expect.any(String))
  })
})

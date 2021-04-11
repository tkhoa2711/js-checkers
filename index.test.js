// const jest = require('jest')
const {
  Checkers,
  Piece,
  Player,
  Square
} = require('./index')

// flatten 2-level nested arrays only
const flattenArrays = array => [].concat.apply([], array)

describe('initialisation', () => {
  describe('#Checkers', () => {
    const player1 = new Player('Bugs Bunny')
    const player2 = new Player('Daffy Duck')

    const game = new Checkers(player1, player2)

    test('an empty game can be created', () => {
      expect(game).toBeDefined()
    })

    test('a game has expected amount of squares', () => {
      // flatten nested arrays
      const allSquares = flattenArrays(game.squares)

      expect(allSquares).toHaveLength(64)
    })

    describe('the board is set up correctly', () => {
      test('each player has 12 pieces', () => {
        const allPieces = flattenArrays(game.pieces)

        expect(allPieces.filter(i => i.player === player1)).toHaveLength(12)
        expect(allPieces.filter(i => i.player === player2)).toHaveLength(12)
      })
    })
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

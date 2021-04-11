// const jest = require('jest')
const {
  Board,
  Checkers,
  Piece,
  Player
} = require('./index')

describe('initialisation', () => {
  test('#Checkers', () => {
    const player1 = new Player('Bugs Bunny')
    const player2 = new Player('Daffy Duck')

    const game = new Checkers({ dimensionX: 8, dimensionY: 8 }, player1, player2)

    expect(game).toBeDefined()
  })

  test('#Board', () => {
    const board = new Board({ dimensionX: 3, dimensionY: 4 })

    expect(board).toBeDefined()
  })


  test('a board has expected amount of pieces', () => {
    const board = new Board({ dimensionX: 3, dimensionY: 4 })
    const allPieces = [].concat.apply([], board.pieces)

    expect(allPieces).toHaveLength(12)
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

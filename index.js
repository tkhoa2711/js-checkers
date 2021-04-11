const DIMENSION_X = 8
const DIMENSION_Y = 8

class Checkers {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    // 2-dimensional array to hold X x Y squares
    //
    // Y . player 2 . . .
    // .
    // .
    // .
    // ^ .
    // | . player 1 . . .
    // 0 -> . . . . . . X
    this.squares = Array(DIMENSION_Y).fill(Array(DIMENSION_X))
    this.pieces = []
    this.startNewGame();
  }

  startNewGame() {
    // TODO: implementation
  }
}

class Square {
  constructor({ x, y }) {
    this.piece = null
    this.coordinates = { x, y }
  }

  isEmpty() {
    return !this.piece
  }
}

class Piece {
  constructor({ x, y }, player) {
    this.coordinates = { x, y }
    this.player = player
    this.isKing = false
    // TODO: extract this ID generation logic into its own function
    this.id = Math.random().toString(36).substring(7);
  }
}

class Player {
  constructor(name) {
    this.name = name
    // a random string as ID
    this.id = Math.random().toString(36).substring(7);
  }
}

module.exports = {
  Checkers,
  Piece,
  Player,
  Square
}

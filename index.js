class Checkers {
  constructor({ dimensionX, dimensionY }, player1, player2) {
    this.board = new Board({ dimensionX, dimensionY })
    this.player1 = player1
    this.player2 = player2
  }
}

class Board {
  constructor({ dimensionX, dimensionY }) {
    // 2-dimensional array to hold X x Y pieces
    this.pieces = Array(dimensionX).fill(Array(dimensionY))
    // TODO: initialise the pieces
  }
}

class Piece {
  constructor(player) {
    this.player = player
    this.isKing = false
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
  Board,
  Checkers,
  Piece,
  Player
}

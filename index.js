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
    this.dimensionX = DIMENSION_X;
    this.dimensionY = DIMENSION_Y;
    this.squares = Array(this.dimensionY).fill(Array(this.dimensionX))
    this.pieces = []
    this.startNewGame();
  }

  startNewGame() {
    for (let y = 0; y < this.dimensionY; y++) {
      for (let x = 0; x < this.dimensionX; x++) {
        // initialise a square
        this.squares[x][y] = new Square({ x, y })

        // initialise a piece in this square if applicable
        let newPiece;
        if ((y === 0 || y === 2) && (x % 2 === 0)) {
          newPiece = new Piece({ x, y }, this.player1)
        } else if ((y === 1) && (x % 2 === 1)) {
          newPiece = new Piece({ x, y }, this.player1)
        } else if ((y === this.dimensionY - 1 || y == this.dimensionY - 3) && (x % 2 === 1)) {
          newPiece = new Piece({ x, y }, this.player2)
        } else if ((y === this.dimensionY - 2) && (x % 2 === 0)) {
          newPiece = new Piece({ x, y }, this.player2)
        }

        if (newPiece) {
          this.squares[x][y] = newPiece;
          this.pieces.push(newPiece)
        }
      }
    }
  }

  move(piece, newSquare, currentPlayer) {
    const coordinates = piece.coordinates
    const newCoordinates = newSquare.coordinates
    const isNotAValidMove = !(
      this.isMovingForward(coordinates, newCoordinates, currentPlayer)
      && this.isMovingDiagonally(coordinates, newCoordinates)
      && this.isMovingOneSpace(coordinates, newCoordinates)
      && newSquare.isEmpty()
    )

    if (isNotAValidMove) {
      throw Error(`The piece ${piece} cannot be moved to this square ${newSquare}`)
    }

    piece.coordinates = newCoordinates
    newSquare.piece = piece
  }

  isMovingForward(coordinates, newCoordinates, currentPlayer) {
    // TODO
  }

  isMovingDiagonally(coordinates, newCoordinates) {
    // TODO
  }

  isMovingOneSpace(coordinates, newCoordinates) {
    // TODO
  }

  isSquareEmpty(coordinates) {
    const { x, y } = coordinates
    return this.squares[x][y].isEmpty()
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

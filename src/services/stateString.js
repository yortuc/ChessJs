/*
  state representation
        white   black   type
  king      1   2     0
  queen     3   4     1
  rook      5   6     2
  bishop    7   8     3 
  knight    9   a     4
  pawn      b   c     5
  empty     x

  // signs http://www.alt-codes.net/chess-symbols.php
*/

const piece_mapping = {
  1: [0, 0, "♔"], // player (0: white, 1: black), type, icon
  2: [1, 0, "♚"],
  3: [0, 1, "♕"],
  4: [1, 1, "♛"],
  5: [0, 2, "♖"],
  6: [1, 2, "♜"],
  7: [0, 3, "♗"],
  8: [1, 3, "♝"],
  9: [0, 4, "♘"],
  a: [1, 4, "♞"],
  b: [0, 5, "♙"],
  c: [1, 5, "♟"],
  x: [null, 6, ""]
}

export const parseStateString = (str)=> { 
  let pieces = []
  let index = 0

  for(var i=0; i<8; i++){
    let row = []

    for(var j=0; j<8; j++){
      row.push({
        player: piece_mapping[str[index]][0],
        type: piece_mapping[str[index]][1],
        icon: piece_mapping[str[index]][2],
        selected: false
      })
      index++
    }

    pieces.push(row)
  }

  const player = parseInt(str[64])

  return { 
    pieces, 
    player
  }
}

export const toStateString = (state)=> {
  
  const mpp = Object.keys(piece_mapping)
  let ret = "";

  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      let p = state.pieces[i][j]

      if(p.type===6){
        ret += "x"
      }
      else{
        // find piece
        for(var kk in piece_mapping){
          if(piece_mapping[kk][0]===p.player && 
             piece_mapping[kk][1]===p.type)
          {
            ret += kk
          }
        }
      }
    }
  }

  ret += state.player.toString()

  return ret
}

// TODO
export const parseFenString = (fenString)=> {
  // starting fen string
  // rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1

  //const parts = fenString.split(" ")

  // parse pieces
  // const strPieces = parts[0].split("/").map(p=> p.length === 1 ? )
}



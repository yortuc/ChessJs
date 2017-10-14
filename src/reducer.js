
export const selectTile = (state, i, j)=> {

  // cant select empty tile directly
  if(!state.selected && state.pieces[i][j].type === 6) {
    return state
  }

  // cant move onto piece owned by same user
  if(state.selected && state.pieces[i][j].player === state.player) {
    return state
  }

  // check if the move is valid
  if(state.selected && state.pieces[i][j].player !== state.player){
    const newState = {...state}
    const sI = newState.selected[0]
    const sJ = newState.selected[1]

    newState.pieces[i][j] = { 
      ...state.pieces[sI][sJ], 
      selected: false
    }
    
    newState.pieces[sI][sJ] = {
      type: 6,
      icon: "",
      selected: false
    }
    
    newState.selected = null
    newState.player = state.player === 0 ? 1 : 0

    return newState 
  }

  // first selection
  if(state.pieces[i][j].player === state.player){
      const newPieces = state.pieces
      newPieces[i][j].selected = true

      return { 
        pieces: newPieces,
        selected: [i, j]
      }
  }

  return state
}
import React, { Component } from 'react'
import { Board } from './Board'
import Hud from './Hud'

import { parseStateString, toStateString } from '../services/stateString'
import { selectTile } from '../reducer'

export const defaultStateString = "6a8428a6ccccccccxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxbbbbbbbb597317950"

export default class ChessGame extends Component {
  constructor(props) {
    super(props)

    const parsedState = parseStateString(this.props.stateString)

    this.state = {
      pieces: parsedState.pieces, // [[]]
      selected: null,             // selected tile pos arr [i,j]
      player: parsedState.player  // 0: white | 1: black
    }
  }

  _tileClick = (i,j)=> {
    const newState = selectTile(this.state, i, j)
    this.setState(
      newState
    )
    this.props.onStateChange(newState)
  }

  _resetGame = ()=> {
    const defaultState = parseStateString(defaultStateString)
    this.setState(
      defaultState
    )
    this.props.onStateChange(defaultState)
  }

  render() {
    return (
      <div className="ChessGame noselect">
        <Board pieces={ this.state.pieces } 
               onTileClick={ this._tileClick }
               selected={ this.state.selected }
               size={ 36 } />
        <Hud player={ this.state.player } />
        <button onClick={()=> this._resetGame()}>Reset</button>
      </div>
    )
  }
}






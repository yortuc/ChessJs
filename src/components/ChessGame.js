import React, { Component } from 'react'
import { Board } from './Board'
import Hud from './Hud'

import { parseStateString, toStateString } from '../services/stateString'
import { selectTile } from '../reducer'

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

  _tileClick= (i,j)=> {
    const newState = selectTile(this.state, i, j)
    this.setState(
      newState
    )
    this.props.onStateChange(newState)
  }

  render() {
    return (
      <div className="ChessGame">
        <Board pieces={ this.state.pieces } 
               onTileClick={this._tileClick}
               size={36} />
        <Hud player={ this.state.player } />
      </div>
    )
  }
}






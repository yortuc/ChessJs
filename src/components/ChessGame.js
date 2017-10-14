import React, { Component } from 'react'
import { Board } from './Board'
import { parseStateString } from '../services/stateString'

import { selectTile } from '../reducer'

export default class ChessGame extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      pieces: parseStateString(this.props.stateString),
      selected: null,
      player: 0
    }
  }

  _tileClick= (i,j)=> {
    const newState = selectTile(this.state, i, j)
    this.setState(
      newState
    )
  }

  render() {
    return (
      <div>
        <Board pieces={ this.state.pieces } 
               onTileClick={this._tileClick}
               size={36} />

        <pre> 
          <b>player </b>
          {this.state.player === 0 ? "WHITE" : " BLACK"}
        </pre>
      </div>
    )
  }
}






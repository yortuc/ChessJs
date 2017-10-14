import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ChessGame from './components/ChessGame'

// 64 chars for piece positions, 
// 1 char for turn (white starts so the initial turn is 0)
const stateString = "6a8428a6ccccccccxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxbbbbbbbb597317950"


ReactDOM.render(
	<ChessGame stateString={ stateString } />, 
	document.getElementById('root'))
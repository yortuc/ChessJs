import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ChessGame from './components/ChessGame'
import { toStateString } from './services/stateString'

// 64 chars for piece positions, 
// 1 char for turn (white starts so the initial turn is 0)
const emptyStart = "6a8428a6ccccccccxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxbbbbbbbb597317950"

// Forsyth–Edwards Notation
// const startFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"

let startingState = emptyStart

if(window.location.pathname.length > 1) {
	startingState = window.location.pathname.substr(1)
}

const stateChange = (newState)=> {
	window.history.pushState({}, null, toStateString(newState))
}

ReactDOM.render(
	<ChessGame stateString={ startingState }
				onStateChange={(newState)=> stateChange(newState) } />, 
	document.getElementById('root'))
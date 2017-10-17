import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ChessGame, { defaultStateString } from './components/ChessGame'
import { toStateString } from './services/stateString'

let startingState = defaultStateString

if(window.location.hash.length > 0) {
	startingState = window.location.hash.substr(1)
}

const stateChange = (newState)=> {
	window.location.hash = "#" + toStateString(newState)
}

ReactDOM.render(
	<ChessGame stateString={ startingState }
				onStateChange={(newState)=> stateChange(newState) } />, 
	document.getElementById('root'))
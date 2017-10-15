import React from 'react'

const Hud = ({ player })=> (
	<div className="Hud"> 
		<b>player</b>
		<div>
			{ player === 0 ? "WHITE" : "BLACK" }
		</div>
	</div>
)

export default Hud
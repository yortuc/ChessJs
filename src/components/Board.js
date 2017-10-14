import React, { Component } from 'react'
import Piece from './Piece'

export const Board = ({ size, pieces, onTileClick })=> (
	<table className="board" style={{ fontSize: size * 0.8 }}>
		<tbody>
		 { pieces.map((row,rowIndex) =>
			<tr key={rowIndex}>
				{ row.map((col, colIndex) => 
			      	<Piece {...col} 
			            key={colIndex} 
			            i={rowIndex}
			            j={colIndex}
			            onTileClick={(i, j)=> onTileClick(i, j)} />) 
	  			}
			</tr>)
		}
		</tbody>
	</table>
)
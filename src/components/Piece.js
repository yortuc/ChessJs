import React, { Component } from 'react'

export default class Piece extends Component{
	render(){
		const {selected, size, i, j} = this.props 

 		const style = {
		  width:  size || 42,
		  height: size || 42,
		  backgroundColor: selected ? 
		  				   	"orange" :
		  					(i + j) % 2 === 0 ? "#fff" : "#efefef"
		}

		return (
			<td style={style} onClick={(e)=> this.props.onTileClick(this.props.i, this.props.j)}>
				<span>{this.props.icon}</span>
			</td>
		)
	}
}
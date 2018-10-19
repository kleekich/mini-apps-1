import React from 'react';
import Sqaure from './Square.jsx';
const Board = (props)=> {

	var matrix = [];
	for(var i = 0 ; i < 6; i++){
		var row = []
		for(var j = 0; j < 7; j++){
			var sq = <Sqaure x={i} y={j} handleClick={props.handleClick}/>;
			row.push(sq);
		}
		matrix.push(row);
	}

	return	(
		<div>
			
		</div>

	)
	


};
export default Board;



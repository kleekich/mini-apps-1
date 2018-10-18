//import board from 'components/board.js'
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			currentPlayer: 1,
			board: [
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0]
			],
		}
	}

	isRowComplete(rowIndex){
		const row = this.state.board[rowIndex];
		let count = 0;
		for(var i = 0; i <7; i++){
			if(row[i]===this.state.currentPlayer) count++;
			if(count === 4) return true;
		}
		return false;
	}

	isColComplete(colIndex){
		let count = 0;
		for(var row = 0; i < 6; i++){
			if(this.state.board[row][colIndex]===this.state.currentPlayer) count++;
			if(count === 4) return true;
		}
		return false;
	}

	//Checks for right to left
	isMajorDiagonalComplete(rowIndex, colIndex){

	}
	//Checks for left to right diagonal for rentely put position
	isMinorDiagonalComplete(rowIndex, colIndex){
		//check for impossible places on left top and right bottom corners
		if((rowIndex<3&&colIndex<3)|| (rowIndex>2&&colIndex>3)) return false;
		var count = 0;
		//if current postion is on left half(the sum of row and col index is always equal and smaller than 5)
		var rowStart = 0;
		var colStart = 0;
		//If current postion is on left half of half diagonal or half diagonal 
		if(rowIndex+colIndex<=5){
			//find starting row =(x+y) for left half
			rowStart = (rowIndex+colIndex);
			colStart = 0; 
			//Iterate from rowStart to 0
			var j = colStart;
			for(var i = rowStart; i>= 0; i--){
				if(this.state.board[i][j]=== this.state.currentPlayer) count++;
				if(count === 4) return true;
				j++;
			}
		//Else, it is right side of half diagnoal
		}else{
			//row always starts at last row
			rowStart = 5;
			colStart = (rowIndex+colIndex)-5
			var i = rowStart;
			//starting from last colStart to lastCol
			for(var j = colStart; j< 7; j++){
				if(this.state.board[i][j] === this.state.currentPlayer) count++;
				if(count === 4) return true;
				i--;
			}
		}
		return false;
	}
	
	render(){
		return(
			<div>
				<h1>This is from react Component!!!</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#app'))
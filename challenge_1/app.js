

let app = function() {
	let board = [
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0]
				];
	let isEnd = false;
	let winner= undefined;
	let turn = 1;

	let initialize = function(){
		//For each td, add click event listener(clickBox)
		board = [
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0]
				];
		isEnd = false;
		winner= undefined;
		turn = 1;
		var boxes = document.querySelectorAll('.td');
		boxes.forEach((box, index)=>{
			box.addEventListener("click", ()=>{
				clickBox(index);
			});
		})
	}

	let clickBox = function(index){
		//get row and col index
		let row = index/3;
		let col = index%3;

		//checks whether it is a valid move with isValid
		if(isValidMove(row, col) && !isEnd){
			//update matrix 
			board[row][col] = currentPlayer
			//update view
			updateBoardView(row, col, currentPlayer);
			//check for winning move
			if(isWinningMove(row, col)){
				isEnd = true;
				updateGameView(currentPlayer);
			}
		//If it is not a valid move
		}else{
			prompt("Cick a valid box please");
		}	
	}

	//function isValid()
	let isValidMove(row, col){
		return board[row][col] === 0 && !isEnd;
	}
	//check for winning
	let isWinningMove(row,col){
		if(isRowComplete(row, col)||
		   isColComplte(row, col)||
		   isDiagonalComplete(row, col)
		) return true;
	}
	let isRowComplete(row, col){
		let row = board[row];
		return _.reduce(row, (accum, col)=>{
			return accum && col === currentPlayer;
		}, true)
	}

	let isColComplete(row, col){
		var completed = true;
		for(let i = 0; i <3; i++){
			completed = completed && board[i][col] === currentPlayer;
		}
		return completed;
	}
}








//Model

//function isValid()
//function isWinningMove(row, col)


//View
//function updateBoardView
//function updateGameView

//TODOs
/*
	1. install underscore
	2. turn
*/

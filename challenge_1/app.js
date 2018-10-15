var app = function() {

	var board = [];
	var isEnd;
	var winner;
	var turn;
	var count;


	var initialize = function(){
		//For each td, add click event listener(clickBox)
		this.board = [
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0]
				];
		this.isEnd = false;
		this.winner= undefined;
		this.turn = 1;
		this.count = 0;

		console.log('in initialze');
		//Setup for game status and turn
		document.body.querySelector('.gameStatus').innerText = 'New Game Started!';
		document.body.querySelector('.turn').innerHTML = 'Turn: Player' + turn;

		//Setup for boxes: put click event listener to each box
		var boxes = document.body.querySelectorAll('td');
		boxes.forEach((box, index)=>{
			box.addEventListener("click", ()=>{
				clickBox(index);
			});
		})
	}

	var clickBox = function(index){
		console.log('clicked: ' + index);
		//get row and col index
		var row = Math.floor(index/3);
		var col = Math.floor(index%3);

		//checks whether it is a valid move with isValid
		if(isValidMove(row, col) && !isEnd){
			//update matrix 
			this.board[row][col] = turn;
			//update view
			updateBoardView(row, col, turn);
			//check for winning move
			if(isWinningMove(row, col)){
				isEnd = true;
				winner = turn;
				updateGameViewForWinner(turn);
			}

			count++;
			//check for tie
			if(count === 9){
				updateGameViewForWinner(0);
			}
			turn = turn===1? 2 : 1;
			



		//If it is not a valid move
		}else{
			prompt("Cick a valid box please");
		}	
	}

	//function isValid()
	var isValidMove = function(row, col){
		return this.board[row][col] === 0 && !isEnd;
	}
	//check for winning
	var isWinningMove = function(row,col){
		if(isRowComplete(row, col)||
		   isColComplte(row, col)||
		   isDiagonalComplete(row, col)
		) return true;
	}
	var isRowComplete = function(row, col){
		let row = this.board[row];
		return _.reduce(row, (accum, col)=>{
			return accum && col === turn;
		}, true)
	}

	var isColComplete = function(row, col){
		var completed = true;
		for(let i = 0; i <3; i++){
			completed = completed && this.board[i][col] === turn;
		}
		return completed;
	}


	var updateBoardView = function(row, col){
	//Make a query string
	var query = '.row'+row+ ' .col'+col;
	//var query = '.row1 .col1';
	//Select the box
	var selectedBox = document.body.querySelector(query);

		//Change View
		selectedBox.innerText = marker();
	}

	//function updateGameView
	//var updateGameViewForWinner = function()

	//marker returns correct marker for the currentPlayer
	var marker = function(){
		return turn === 1 ? 'X' :'O';
	}





	initialize();
}
app();







//Model

//function isValid()
//function isWinningMove(row, col)


//View

//function updateBoardView



//TODOs
/*
	1. install underscore
	2. turn
*/



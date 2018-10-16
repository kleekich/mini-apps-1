var app = function() {
	
	/*Model*/
	var board;
	var isEnd;
	var winner;
	var turn;
	var count;
	var prevWinner;
	var score;
	var playerOneName;
	var playerTwoName;

	var resetGame = function(){
		console.log("RESET");
		this.board = [
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0]
				];
		this.isEnd = false;
		this.winner= undefined;
		this.turn = 1;
		this.count = 0;
		

		//Change View
		resetGameAndBoardView();

	}

	var initialize = function(){
		resetGame();
		
		//Setup for username
		this.playerOneName = prompt("What is player1's Name?");
		this.playerTwoName = prompt("What is player2's Name?");
		document.body.querySelector('.playerOneName').innerText = this.playerOneName;
		document.body.querySelector('.playerTwoName').innerText = this.playerTwoName;

		this.prevWinner = 1;
		this.score = [0, 0];



		//Setup for new game button with resetGame
		document.body.querySelector('button').addEventListener("click", ()=>{resetGame()});		

		//Setup for score board
		document.body.querySelector('.scorePlayer1').innerText = 0;
		document.body.querySelector('.scorePlayer2').innerText = 0;


		//Setup for boxes: put click event listener to each box
		var boxes = document.body.querySelectorAll('td');
		boxes.forEach((box, index)=>{
			//Add style
			box.style.textAlign = "center";

			//Add click event listener
			box.addEventListener("click", ()=>{
				clickBox(index);
			});
		})
	}


	//Click event handler
	var clickBox = function(index){
		console.log('clicked: ' + index);
		//get row and col index
		var row = Math.floor(index/3);
		var col = Math.floor(index%3);

		//checks whether it is a valid move with isValid
		if(isValidMove(row, col) && !isEnd){
			this.turn = this.turn===1? 2 : 1;
			document.body.querySelector('.gameStatus').innerText = 'Waiting for';
			document.body.querySelector('.turn').innerText = 'Turn: '+ marker();
			//update matrix 
			this.board[row][col] = this.turn;
			console.log(this.board);
			//update view
			updateBoardView(row, col);
			//check for winning move
			if(isWinningMove(row, col)){
				this.isEnd = true;
				this.winner = this.turn;
				this.score[this.turn-1] = this.score[this.turn-1]+1;
				this.prevWinner = this.turn;
				updateGameViewForWinner(this.turn);
				console.log('it is a winning move!');
				return;
			}

		
			this.count++;
			//check for tie
			if(this.count === 9){
				console.log("Tied!");
				updateGameViewForWinner(0);
				this.isEnd = true;

			}
			
		//If it is not a valid move
		}else{
			alert("Cick a valid box please");
		}	
	}

	/*Controller*/
	var isRowComplete = function(row, col){
		var accum = true;
		this.board[row].forEach((col)=>{
			accum = accum && col === this.turn;
		});
		return accum;

	}

	var isColComplete = function(row, col){
		var completed = true;
		for(let i = 0; i <3; i++){
			completed = completed && this.board[i][col] === this.turn;
		}
		return completed;
	}

	//major diagonal(left to right)
	var isMajorDiagonalComplete = function(row, col){
		//sum of row and col should be an even number to be valid diagonal strike
		if((row+col)%2 !== 0) return false;
		else{	
			for(var i = 0; i < 3; i++){
				if(this.board[i][i] !== this.turn){
					return false;
				}
			}
		}
		return true;
	}

	//Minor diagonal(right to left)
	var isMinorDiagonalComplete = function(row, col){
		//sum of row and col should be an even number to be valid diagonal strike
		if((row+col)%2 !== 0) return false;
		else{	
			for(var i = 0; i < 3; i++){
				if(this.board[i][2-i] !== this.turn){
					return false;
				}
			}
		}
		return true;
	}

	var isValidMove = function(row, col){
		return this.board[row][col] === 0 && !this.isEnd;
	}
	//check for winning
	var isWinningMove = function(row,col){
		if(isRowComplete(row, col)||
		   isColComplete(row, col)||
		   isMajorDiagonalComplete(row, col)||
		   isMinorDiagonalComplete(row, col)
		) return true;
		return false;
	}


	/* View */
	var updateBoardView = function(row, col){
	//Make a query string
	var query = '.row'+row+ ' .col'+col;
	//var query = '.row1 .col1';
	//Select the box
	var selectedBox = document.body.querySelector(query);
		//Add marker in the box
		selectedBox.innerText = marker();
	}

	var updateGameViewForWinner = function(winner){
		if(winner !== 0){
			document.body.querySelector('.gameStatus').innerText = 'Winner: Player' + winner;	
			document.body.querySelector('.turn').innerText = '¯\_(ツ)_/¯';
			if(winner === 1){
				document.body.querySelector('.scorePlayer1').innerText = this.score[winner-1].toString();	
			}else{
				document.body.querySelector('.scorePlayer2').innerText = this.score[winner-1].toString();	
			}	
		}else{
			document.body.querySelector('.gameStatus').innerText = 'Tied';	
			document.body.querySelector('.turn').innerText = '¯\_(ツ)_/¯';
			
		}
		
	}

	//marker returns correct marker for the currentPlayer
	var marker = function(){
		return this.turn === 1 ? 'X' :'O';
	}

	var resetGameAndBoardView = function(){
		document.body.querySelector('.gameStatus').innerText = 'New Game Started!';
		document.body.querySelector('.turn').innerText = 'Turn: ' + marker();
		document.body.querySelectorAll('td').forEach(box =>{
			box.innerText = '';
		})
	}
	initialize();
}
app();

var App = {
	board: [
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0]
		    ],
	isEnd: false,
	winner: undefined,
	turn: 1,
	count: 0,
	prevWinner: 0,
	score: [0,0],
	playerOneName: 'Anon1',
	playerTwoName: 'Anon2',

	initialize: function() {
		//Setup for username
		App.playerOneName = prompt("What is player1's Name?");
		App.playerTwoName = prompt("What is player2's Name?");

		//Set initial game status
		GameViewControlller.resetGameStatus();

		//Set initial value fore preWinner and score
		App.prevWinner = 1;
		App.score = [0, 0];

		//Initialize views
		GameView.initialize();
		BoardView.initialze();
	}
}

var GamveViewController = {
	resetGameStatus: function(){
		App.board = [
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0]
				];
		App.isEnd = false;
		App.winner= undefined;
		App.turn = 1;
		App.count = 0;
	}
}


var GameView = {
	initialize: function(){
		//Setup Players
		document.body.querySelector('.playerOneName').innerText = App.playerOneName;
		document.body.querySelector('.playerTwoName').innerText = App.playerTwoName;

		//Set onClick listener to button
		document.body.querySelector('button').addEventListener("click", ()=>{App.resetGame()});

		//Game Status		
		GameView.resetGameView();
	},
	updateGameViewForWinner: function(winner){
		if(winner !== 0){
			document.body.querySelector('.gameStatus').innerText = 'Winner: Player' + winner;	
			document.body.querySelector('.turn').innerText = '¯\_(ツ)_/¯';
			if(winner === 1){
				document.body.querySelector('.scorePlayer1').innerText = App.score[winner-1].toString();	
			}else{
				document.body.querySelector('.scorePlayer2').innerText = App.score[winner-1].toString();	
			}	
		}else{
			document.body.querySelector('.gameStatus').innerText = 'Tied';	
			document.body.querySelector('.turn').innerText = '¯\_(ツ)_/¯';
		}
	},
	resetGameView: function(){
		document.body.querySelector('.gameStatus').innerText = 'New Game Started!';
		document.body.querySelector('.turn').innerText = 'Turn: ' + marker();
	}
}

var BoardView = {
	initialize: function(){
		document.body.querySelectorAll('td').forEach(box =>{
			box.innerText = '';
		});	
		//Setup for boxes: put click event listener to each box
		var boxes = document.body.querySelectorAll('td');
		boxes.forEach((box, index)=>{
			//Add style
			box.style.textAlign = "center";

			//Add click event listener
			box.addEventListener("click", ()=>{
				BoardViewController.clickBox(index);
			});
		})

	},
	handleClick: function(){
		//Make a query string
		var query = '.row'+row+ ' .col'+col;
		//Select the box
		var selectedBox = document.body.querySelector(query);
			//Add marker in the box
			selectedBox.innerText = marker();
	}
	//marker returns correct marker for the currentPlayer
	marker: function(){
		return App.turn === 1 ? 'X' :'O';
	}
}

var BoardViewController = {
	clickBox: function(index){
		console.log('clicked: ' + index);
		//get row and col index
		var row = Math.floor(index/3);
		var col = Math.floor(index%3);

		//checks whether it is a valid move with isValid
		if(BoardViewController.isValidMove(row, col) && !isEnd){
			App.turn = App.turn===1? 2 : 1;
			document.body.querySelector('.gameStatus').innerText = 'Waiting for';
			document.body.querySelector('.turn').innerText = 'Turn: '+ marker();
			//update matrix 
			App.board[row][col] = App.turn;
			console.log(App.board);
			//update view
			updateBoardView(row, col);
			//check for winning move
			if(BoardViewController.isWinningMove(row, col)){
				App.isEnd = true;
				App.winner = App.turn;
				App.score[App.turn-1] = App.score[App.turn-1]+1;
				App.prevWinner = App.turn;
				updateGameViewForWinner(App.turn);
				console.log('it is a winning move!');
				return;
			}
			App.count++;
			//check for tie
			if(App.count === 9){
				console.log("Tied!");
				updateGameViewForWinner(0);
				App.isEnd = true;
			}		
		//If it is not a valid move
		}else{
			alert("Cick a valid box please");
		}	
	},

	isValidMove: function(row, col){
		return App.board[row][col] === 0 && !App.isEnd;
	},

	//check for winning
	isWinningMove: function(row,col){
		if(isRowComplete(row, col)||
		   isColComplete(row, col)||
		   isMajorDiagonalComplete(row, col)||
		   isMinorDiagonalComplete(row, col)
		) return true;
		return false;
	},
	isRowComplete: function(row, col){
		var accum = true;
		App.board[row].forEach((col)=>{
			accum = accum && col === App.turn;
		});
		return accum;

	},
	isColComplete: function(row, col){
		var completed = true;
		for(let i = 0; i <3; i++){
			completed = completed && App.board[i][col] === App.turn;
		}
		return completed;
	},

	//major diagonal(left to right)
	isMajorDiagonalComplete: function(row, col){
		//sum of row and col should be an even number to be valid diagonal strike
		if((row+col)%2 !== 0) return false;
		else{	
			for(var i = 0; i < 3; i++){
				if(App.board[i][i] !== App.turn){
					return false;
				}
			}
		}
		return true;
	},

	//Minor diagonal(right to left)
	isMinorDiagonalComplete: function(row, col){
		//sum of row and col should be an even number to be valid diagonal strike
		if((row+col)%2 !== 0) return false;
		else{	
			for(var i = 0; i < 3; i++){
				if(App.board[i][2-i] !== App.turn){
					return false;
				}
			}
		}
		return true;
	}
}




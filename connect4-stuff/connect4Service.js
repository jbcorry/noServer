angular.module('noServer')
.service('connect4Svc', function() {

// this.createNewGame = function() {
//
//     var board = new Array(6); //this creates a new array with 6 spots
//     var winner = false;  //default winner to false.
//     var player1 = {
//       name: '',
//       color: 'yellow',
//       id: 'x',
//       won: 'false',
//       tally: 0,
//     };
//     var player2 = {
//       name: '',
//       color: 'red',
//       id: 'o',
//       won: 'false',
//       tally: 0,
//     };
//     var currentPlayer = {
//       name: '',
//       color: '',
//       id: '',
//       won: 'false',
//       tally: 0,
//     }; //will have to toggle after every click
//     var currentColor = ''; //will also have to toggle after every click
//     var boardInput = '';  //keeps track of the player as well.
//     var boardLocation = ''; //keeps track of which spot we are at on the board
//
//     var colSpaces = new Array(7); //7 columns that will eventually fill the board array making a 2-D array.
//     for (var i = 0; i < 7; i++) {
//     	colSpaces[i] = 5;
//     }
//
//     function selectColumn(colNum){ //this is run whenever a circle is clicked.  It automatically selects only the column and not the individual circle.
//       if (currentPlayer.won) {
//         return; //this makes it impossible to make another move if there is already a winner.  basically freezes the board.
//       }
//       if (colSpaces[colNum] == -1) {
//       return //if there are no more spaces in the column, this wont allow anymore moved in that specific column.
//       }
//       boardLocation = colSpaces[colNum].toString() + colNum.toString(); //boardLocation will be the row + the column number which corresponds to the individual circles' id in the directive called 'connect4DirectiveTemp'
//       board[colSpaces[colNum]][colNum] = boardInput;
//       colSpaces[colNum]--; //removes one spot from the selected column.
//       var cir = document.getElementById(boardLocation);
//       cir.style.background=currentPlayer.color;
//       if(checkForWinner()) {
//         alert(currentPlayer.name + ' won!');
//         currentPlayer.won = true;
//         currentPlayer.tally++
//         return;
//       }
//       getCurrentPlayer(); //change players if nobody won yet.
//     }

    this.getCurrentPlayer = function (player1, player2) {
      console.log(player1);
      if (player1) {
        var currentPlayer = {};
        if (currentPlayer == player2) {
          currentPlayer = player1; //change player

        } else {
          currentPlayer = player2 //change player

        }
        playerLabel = currentPlayer.name + '\'s turn';


        console.log(currentPlayer)
        return (currentPlayer)
    }
    else {
      return {}
    }
  }

  //   function setPlayers() {
  //   	do {
  //     	 player1.name = prompt('Player 1 enter your name. ');
  //    		 player2.name = prompt('Player 2 enter your name. ');
  //     } while (player1 == player2)
  //     currentPlayer = player2;
  //     getCurrentPlayer();
  //   }
  //
  //   function setBoard() {
  //   	for (var i = 0; i < 6; i++) { //this makes each spot on our virtual game board equal ''.
  //     board[i] = new Array(7);
  //   	}
  //   	for (var i = 0; i < 6; i++) {
  //   		for (var j = 0; j < 7; j++) {
  //     		board[i][j] = ' ';
  //    	 }
  //   	}
  //   }
  //
  //   function checkForWinner() { //ya...this is nuts...
  //
  //
  //   //   for (var i = 0; i < 3; i++) {
  //   //     for (var j = 0; j < 7; j++) {
  //   //       if (vertical(i,j)) {
  //   //         return true;
  //   //       }
  //   //     }
  //   //   }
  //   //   for (var i = 0; i < 6; i++) {
  //   //     for (var j = 0; j < 4; j++) {
  //   //       if (horizontal(i, j)) {
  //   //         return true;
  //   //       }
  //   //     }
  //   //   }
  //   //   for (var i = 0; i < 3; i++) {
  //   //     for (var j = 0; j < 4; j++) {
  //   //       if (downRight(i, j)) {
  //   //         return true;
  //   //       }
  //   //     }
  //   //   }
  //   //
  //   //   for (var i = 0; i < 3; i++) {
  //   //     for (var j = 3; j < 7; j++) {
  //   //       if (downLeft(i, j)) {
  //   //         return true;
  //   //       }
  //   //     }
  //   //   }
  //   //   return false;
  //   //
  //   // }
  //   //
  //   // function downRight(row, col) {
  //   //   if ((board[row][col] == board[row + 1][col + 1])
  //   //       && (board[row][col] == board[row + 2][col + 2])
  //   //       && (board[row][col] == board[row + 3][col + 3])
  //   //       && (board[row][col] != ' ')) {
  //   //     return true;
  //   //   }
  //   //
  //   //   return false;
  //   // }
  //   // function downLeft( row, col) {
  //   //   if ((board[row][col] == board[row + 1][col - 1])
  //   //       && (board[row][col] == board[row + 2][col - 2])
  //   //       && (board[row][col] == board[row + 3][col - 3])
  //   //       && (board[row][col] != ' ')) {
  //   //     return true;
  //   //   }
  //   //
  //   //   return false;
  //   // }
  //   // function vertical(row, col) {
  //   //   if ((board[row][col] == board[row + 1][col])
  //   //       && (board[row][col] == board[row + 2][col])
  //   //       && (board[row][col] == board[row + 3][col])
  //   //       && (board[row][col] != ' ')) {
  //   //     return true;
  //   //   }
  //   //
  //   //   return false;
  //   // }
  //   // function horizontal(row, col) {
  //   //   if ((board[row][col] == board[row][col + 1])
  //   //       && (board[row][col] == board[row][col + 2])
  //   //       && (board[row][col] == board[row][col + 3])
  //   //       && (board[row][col] != ' ')) {
  //   //     return true;
  //   //   }
  //   //   return false;
  //   }
  //   function reset() {
  //     for (var i = 0; i < 6; i++) {
  //       for (var j = 0; j < 7; j++) {
  //         board[i][j] = ' ';
  //         boardLocation = i.toString() + j.toString();
  //         var cir = document.getElementById(boardLocation);
  //     		cir.style.background="";
  //       }
  //     }
  //     player2.won = false;
  //     player1.won = false;
  //     currentColor = '';
  //     boardInput = '';
  //     boardLocation = '';
  //     for (var i = 0; i < 7; i++) {
  //       colSpaces[i] = 5;
  //     }
  //     getCurrentPlayer();
  //   }
  //
  //
  //   	setPlayers();
  //     setBoard();
  //
  // }
  //
})

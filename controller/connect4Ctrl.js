angular.module('noServer')
.controller('connect4Ctrl', function($scope, mainService, connect4Svc) {

  $scope.board = [

    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []]

  ]; //this creates a new array with 6 spots
 //will have to toggle after every click
  $scope.boardLocation = ''; //keeps track of which spot we are at on the board

  $scope.colSpaces = [5, 5, 5, 5, 5, 5, 5]; //7 columns that will eventually fill the board array making a 2-D array.

  var bool = true;

  var winner = false;

  $scope.player1 = {
    name: 'Player 1',
    color: 'yellow',
    id: 'x',
    won: false,
    tally: 0,
  };
  $scope.player2 = {
    name: 'Player 2',
    color: 'red',
    id: 'o',
    won: false,
    tally: 0,
  };



  $scope.createNewGame = function() {

      // $scope.reset()
      location.reload();

      // setBoard();
      //


      setPlayers();
      setBoard();
  }
  var k = 0;
      $scope.selectColumn = function (colNum){ //this is run whenever a circle is clicked.  It automatically selects only the column and not the individual circle.
        if (k === 0) {
          setBoard();
          k++;
        }
        else{}
        if ($scope.colSpaces[colNum] == -1) {
        return //if there are no more spaces in the column, this wont allow anymore moved in that specific column.
        }
        toggleText();
        $scope.currentPlayer = toggle();
        $scope.playername = $scope.currentPlayer.name;
        if (winner) {
          return; //this makes it impossible to make another move if there is already a winner.  basically freezes the board.
        }
        $scope.boardLocation = $scope.colSpaces[colNum].toString() + colNum.toString(); //$scope.boardLocation will be the row + the column number which corresponds to the individual circles' id in the directive called 'connect4DirectiveTemp'
        // $scope.board[$scope.colSpaces[colNum]][colNum] = $scope.currentPlayer.id;
        $scope.num1 = parseInt($scope.boardLocation.split('')[0]);
        $scope.num2 = parseInt($scope.boardLocation.split('')[1]);
        $scope.board[$scope.num1][$scope.num2].splice(0,1,$scope.currentPlayer.id);
        // console.log($scope.board[$scope.num1][$scope.num2]);
        $scope.colSpaces[colNum]--; //removes one spot from the selected column.
        var cir = document.getElementById($scope.boardLocation);
        cir.style.background=$scope.currentPlayer.color;
        if(checkForWinner()) {
          alert($scope.currentPlayer.name + ' won!');
          winner = true;
          $scope.currentPlayer.tally++
          return;
        }
        return $scope.currentPlayer;

        // getCurrentPlayer(); //change players if nobody won yet.
      }


      // $scope.currentPlayer = connect4Svc.getCurrentPlayer($scope.player1, $scope.player2)
      // function getCurrentPlayer() {
      //
      //
      //   if ($scope.currentPlayer == $scope.player2) {
      //   	$scope.currentPlayer = $scope.player1; //change player
      //
      //   } else {
      //   	$scope.currentPlayer = $scope.player2 //change player
      //
      //   }
      //   playerLabel = $scope.currentPlayer.name + '\'s turn';
      //
      //   console.log($scope.currentPlayer)
      //   return $scope.currentPlayer;
      // }



      function toggle() {

        if (bool) {
          bool = false;
          // document.getElementById('p1').style.textDecoration='underline';
      	  // document.getElementById('p2').style.textDecoration='none';
          return $scope.player1;
        } else {
          bool = true;
          // document.getElementById('p2').style.textDecoration='underline';
          // document.getElementById('p1').style.textDecoration='none';
          return $scope.player2;
        }


      }

      var b = true;
  function toggleText() {

        if (b) {
        $scope.player = $scope.player1;
        b = false;
        return $scope.player;
      }else{
        $scope.player = $scope.player2;
        b = true;
        return $scope.player;
      }
    }




      function setPlayers() {
      	// do {
        	//  $scope.p1 = prompt('Player 1 enter your name. ');
       	// 	 $scope.p2 = prompt('Player 2 enter your name. ');
        // } while (player1 == player2)
        // currentPlayer = $scope.player2;
        $scope.currentPlayer = $scope.player2;

        // console.log(currentPlayer)
      }

      function setBoard() {
      	// for (var i = 0; i < 7; i++) { //this makes each spot on our virtual game board equal ''.
        // $scope.board[i] = [[], [], [], [], [], []];
      	// }
      	for (var i = 0; i < 7; i++) {
      		for (var j = 0; j < 6; j++) {
        		$scope.board[j][i] = [' '];
       	 }
      	}
        return $scope.board
      }

//check for winner function
function checkForWinner() {

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 7; j++) {
      if (vertical(i,j)) {
        return true;
      }
    }
  }
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 4; j++) {
      if (horizontal(i, j)) {
        return true;
      }
    }
  }
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
      if (downRight(i, j)) {
        return true;
      }
    }
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 3; j < 7; j++) {
      if (downLeft(i, j)) {
        return true;
      }
    }
  }
  return false;

}
//check diagonal
function downRight(row, col) {
  if (($scope.board[row][col][0] == $scope.board[row + 1][col + 1][0])
      && ($scope.board[row][col][0] == $scope.board[row + 2][col + 2][0])
      && ($scope.board[row][col][0] == $scope.board[row + 3][col + 3][0])
      && ($scope.board[row][col][0] != ' ')) {
    return true;
  }

  return false;
}
//check diagonal
function downLeft( row, col) {
  if (($scope.board[row][col][0] == $scope.board[row + 1][col - 1][0])
      && ($scope.board[row][col][0] == $scope.board[row + 2][col - 2][0])
      && ($scope.board[row][col][0] == $scope.board[row + 3][col - 3][0])
      && ($scope.board[row][col][0] != ' ')) {
    return true;
  }

  return false;
}
//check up and down
function vertical(row, col) {
  if (($scope.board[row][col][0] == $scope.board[row + 1][col][0])
      && ($scope.board[row][col][0] == $scope.board[row + 2][col][0])
      && ($scope.board[row][col][0] == $scope.board[row + 3][col][0])
      && ($scope.board[row][col][0] != ' ')) {
    return true;
  }

  return false;
}
//check left and right
function horizontal(row, col) {
  if (($scope.board[row][col] == $scope.board[row][col + 1][0])
      && ($scope.board[row][col] == $scope.board[row][col + 2][0])
      && ($scope.board[row][col] == $scope.board[row][col + 3][0])
      && ($scope.board[row][col] != ' ')) {
    return true;
  }
  return false;
}
//       function downRight(row, col) {
//         if (($scope.board[row][col] == $scope.board[row + 1][col + 1])
//             && ($scope.board[row][col] == $scope.board[row + 2][col + 2])
//             && ($scope.board[row][col] == $scope.board[row + 3][col + 3])
//             && ($scope.board[row][col] != ' ')
//             && ($scope.board[row][col])) {
//           return true;
//         }
//
//         return false;
//       }
//       function downLeft(row, col) {
//         if (($scope.board[row][col] == $scope.board[row + 1][col - 1])
//             && ($scope.board[row][col] == $scope.board[row + 2][col - 2])
//             && ($scope.board[row][col] == $scope.board[row + 3][col - 3])
//             && ($scope.board[row][col] != ' ')
//             && ($scope.board[row][col])) {
//           return true;
//         }
//
//         return false;
//       }
//       function vertical(row, col) {
//         if (($scope.board[row][col] == $scope.board[row + 1][col])
//             && ($scope.board[row][col] == $scope.board[row + 2][col])
//             && ($scope.board[row][col] == $scope.board[row + 3][col])
//             && ($scope.board[row][col] != ' ')
//             && ($scope.board[row][col])) {
//               console.log($scope.board[row][col]);
//               console.log($scope.board[row + 1][col])
//               console.log($scope.board[row + 2][col])
//               console.log($scope.board[row + 3][col])
//           return true;
//         }
//
//         return false;
//       }
//       function horizontal(row, col) {
//         if (($scope.board[row][col] == $scope.board[row][col + 1])
//             && ($scope.board[row][col] == $scope.board[row][col + 2])
//             && ($scope.board[row][col] == $scope.board[row][col + 3])
//             && ($scope.board[row][col] != ' ')
//             && ($scope.board[row][col])) {
//           return true;
//         }
//         return false;
//       }
//
//
// $scope.checkForWinner = function(row, col) { //ya...this is nuts...
//         // setBoard();
//
//         for (var i = 0; i < 3; i++) {
//           for (var j = 0; j < 7; j++) {
//             if (vertical(i,j)) {
//               return true;
//             }
//           }
//         }
//         for (var i = 0; i < 6; i++) {
//           for (var j = 0; j < 4; j++) {
//             if (horizontal(i, j)) {
//               return true;
//             }
//           }
//         }
//         for (var i = 0; i < 3; i++) {
//           for (var j = 0; j < 4; j++) {
//             if (downRight(i, j)) {
//               return true;
//             }
//           }
//         }
//
//         for (var i = 0; i < 3; i++) {
//           for (var j = 3; j < 7; j++) {
//             if (downLeft(i, j)) {
//               return true;
//             }
//           }
//         }
//         return false;
//
//       }


$scope.reset = function() {
  location.reload();

  setPlayers();
  setBoard();
}





// setPlayers();
// setBoard();


})

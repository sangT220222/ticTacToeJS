const game_board = (() => {
  let game_board = [
    ['','',''],
    ['','',''],
    ['','','']
  ];

  const rows = 3;
  const columns = rows;
  const board = [];

  // for (let i = 0; i < rows; i++) {
  //   board[i] = [];
  //   for (let j = 0; j < columns; j++) {
  //     board[i].push(Cell());
  //   }
  // }

  const get_game_board = () => game_board; //getting game board
  return game_board[0][2];
})


const check_winner = () =>{
  for(let row = 0; row < 3 ; row ++){
    if(game_board[row][0] === symbol && game_board[row][1] === symbol && game_board[row][2] === symbol){
      return true //this if loop checks if the symbol is placed 3 times in a row horizontally, the it increments hence checks all the rows
    }
  }

  for(let column = 0; column < 3 ; column ++){
    if(game_board[0][column] === symbol && game_board[1][column] === symbol && game_board[2][column] === symbol){
      return true //this if loop checks if the symbol is placed 3 times in a row vertically, the it increments hence checks all the columns
    }
  }

  //checks for diagonal win
  if (game_board[0][0] === symbol && game_board[1][1] === symbol && game_board[2][2] === symbol){
    return true;
  }

  if (game_board[0][2] === symbol && game_board[1][1] === symbol && game_board[2][0] === symbol){
    return true;
  }

  return false;
}


//BoardCell represents a square on the gameboard
//0 = no value, hence value is default to 0
//will have to edit the other values as to assinging them to Os or Xs
const BoardCell = () =>{
  let value = 0;
  // accept player's move, and change the cell
  const add_move = (move) => {
    value = move;
  }
  //getting the current value through function closure!
  const get_move = () => {return value}

  return add_move, get_move;
}

// const game_logic = () => {
//   const game_board = game_board();
//   const player1 = "Player 1";
//   const player2 = "Player 2";

//   const players = [ //construction of players object
//     {
//       name: player1,
//       token: 1
//     },
//     {
//       name: player2,
//       token: 2
//     }
//   ];

//   //default -> make active player player1 
//   let active_player = players[0];

//   //switching player's turn
//   // console.log(active_player.name);
//   const switch_player_turn = () => {
//     if (active_player.token === 1){
//       active_player = players[1];
//     }
//   };

//   const get_active_player = () => {
//     return active_player;
//   }

//   const new_round = () =>{
//     //add logic here to print a new round
//   }


// }

console.log(game_board());
// game_logic();
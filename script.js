const game_board = (() => {
  let game_board = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9']
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


  return game_board;
})

// const Player = ((name) => {
//   const player = name;
  
//   let token = 0;
//   if (name = "Player1"){
//     token = 1;
//   }
//   if (name = "Player2"){
//     token = 2;
//   }
//   return player;
// })



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

const game_logic = () => {
  const game_board = game_board();
  const player1 = "Player 1";
  const player2 = "Player 2";

  const players = [ //construction of players object
    {
      name: player1,
      token: 1
    },
    {
      name: player2,
      token: 2
    }
  ];

  //default -> make active player player1 
  let active_player = players[0];

  //switching player's turn
  // console.log(active_player.name);
  const switch_player_turn = () => {
    if (active_player.token === 1){
      active_player = players[1];
    }
  };

  const get_active_player = () => {
    return active_player;
  }

  const new_round = () =>{
    //add logic here to print a new round
  }


}

GameLogic();
const game_board_controller = (() => {
  let game_board = [
    ['','',''],
    ['','',''],
    ['','','']
  ];
  return game_board;
})


const game_logic_controller = (() =>{

  const create_player = ((name, symbol) => {
    return {
        name: name,
        symbol: symbol
    }
  })
  
  const check_winner = ((board, symbol) =>{
    for(let row = 0; row < 3 ; row ++){
      if(board[row][0] === symbol && board[row][1] === symbol && board[row][2] === symbol){
        return true //this if loop checks if the symbol is placed 3 times in a row horizontally, the it increments hence checks all the rows
      }
    }
  
    for(let column = 0; column < 3 ; column ++){
      if(board[0][column] === symbol && board[1][column] === symbol && board[2][column] === symbol){
        return true //this if loop checks if the symbol is placed 3 times in a row vertically, the it increments hence checks all the columns
      }
    }
  
    //checks for diagonal win
    if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol){
      return true;
    }
  
    if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol){
      return true;
    }
  
    return false;
  })
  
  const check_draw = ((board) => {
    const flat_board = board.reduce((acc, row) => acc.concat(row), []);
    return !flat_board.includes('');
    //returns true if there are still avaliable spaces left to fill
  })
  
  const get_move = ((player,board) => {
    let is_valid_move = false;
    while (!is_valid_move) {
        let move = prompt(`${player}, enter your move (row, column):`);
        let [row, column] = move.split(",").map(val => parseInt(val.trim()) - 1); // Adjusting for 0-based indexing
  
        if (row >= 0 && row < 3 && column >= 0 && column < 3 && board[row][column] === "") {
            return {row,column};
        } else {
            console.log("Invalid move. Please try again.");
        }
    }
  })

  return{
    create_player,
    check_winner,
    check_draw,
    get_move
  };
})();


//currently console display is being implemented
const display_board_controller = ((board) => {

  function print_board(){
    console.log("-------------");
    for (let row of board) {
        let row_string = "|";
        for (let cell of row) {
            if (cell === "") {
                row_string += "   |";
            } else {
                row_string += ` ${cell} |`;
            }
        }
        console.log(row_string);
        console.log("-------------");
    }
  
  }

  function start_game() {
    let playerX = game_logic_controller.create_player("Player 1", "X");
    let playerO = game_logic_controller.create_player("Player 2", "O");
    let current_player = playerX;
    let game_running = true;

    while (game_running) {
      let user_move = game_logic_controller.get_move(current_player.name,board);
      let row = user_move.row;
      let column = user_move.column 
  
      if (board[row][column] === ''){
        board[row][column] = current_player.symbol; // this is being filled, but need to update 
        print_board()
  
        if (game_logic_controller.check_winner(board, current_player.symbol)) {
          print_board(board);
          console.log(`${current_player.name} wins!`);
          game_running = false;
        }

        else if (game_logic_controller.check_draw(board)) {     
          console.log("It's a draw!");
          game_running = false;
        }
      }
  
      if (current_player === playerX){
        current_player = playerO;
      }
      else{
        current_player = playerX;
      }
    }
  }
  return{ 
    print_board,
    start_game
  };
})(game_board_controller());

display_board_controller.start_game();





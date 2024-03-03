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
    
    const check_move = ((player,board,row,column) => {
        if (row >= 0 && row < 3 && column >= 0 && column < 3 && board[row][column] === "") {
            return true;
        } else {
            return false;
        }
    })
  
    return{
      create_player,
      check_winner,
      check_draw,
      check_move
    };
  })();
  
  
  //currently console display is being implemented
  const display_board_controller = ((board) => {

    let game_running = true;

    function print_board(playerX,playerO){
        //selecting specified html tag 
        const grid_container = document.querySelector(".grid_container");
        //clearing out the content in html tag before rendering the grid_container
        grid_container.innerHTML = '';
        let current_player = playerX;
        //looping through each row in the board array from the game_board_controller function on line 1
        board.forEach((row, row_index) => {
            //row represents each individual row in the board array, it's the element used to iterate over as the loop goes through each row in the board array
            //row_index is the current row being iterated over in the array, this is one of the parts used when we assign a "symbol" to a specific cell -line 101
            const row_element = document.createElement("div");
            row_element.classList.add("grid_row");// adding to the html class list

            //looping through each cell in the current row (as our array is 3x3, so this is a loop of 3 times)
            row.forEach((cell, cell_index)  => {
                //cell is each celel within the current row being iterated over
                //cell_index is the index of current cell being iterated over, this is one of the parts used when we assign a "symbol" to a specific cell - line 101
                const cell_element = document.createElement("button");
                cell_element.classList.add("grid_cell");
                cell_element.textContent = cell; // Set the content of the cell if needed
                //event listener when the a cell is clicked
                cell_element.addEventListener("click", () =>{
                    if (!game_running) return; //exits the function if game_running = false
                    //checks if cell's empty
                    if(!game_logic_controller.check_move(current_player.name,board,row_index,cell_index)) {
                        console.log("Invalid move. Please try again."); //will change this to be an HTML output instead of console
                    }
                    else {
                        cell_element.textContent = current_player.symbol; //updates the cell content to the appropriate symbol
                        board[row_index][cell_index] = current_player.symbol; //updates the board accordinglty
                        //checking if game is won or not
                        if (game_logic_controller.check_winner(board, current_player.symbol)) {                        
                            console.log(`${current_player.name} wins!`); //UPDATE THIS TO DISPLAY ON HTML
                            game_running = false; //changing control flow flag
                        }
                
                        else if (game_logic_controller.check_draw(board)) {     
                            console.log("It's a draw!");//UPDATE THIS TO DISPLAY ON HTML
                            game_running = false; //changing control flow flag
                        }
                        current_player = current_player === playerX ? playerO: playerX; //switching player once a cell is clicked
                    }
                });                
                row_element.appendChild(cell_element);
            })
            grid_container.appendChild(row_element); 
        });
    }
  
    function start_game() {
      let playerX = game_logic_controller.create_player("Player 1", "X");
      let playerO = game_logic_controller.create_player("Player 2", "O");
      print_board(playerX,playerO);
    }
  
    return{ 
      print_board,
      start_game
    };
  })(game_board_controller());
  
//   display_board_controller.start_game();
  
display_board_controller.start_game();
  
  
  
  
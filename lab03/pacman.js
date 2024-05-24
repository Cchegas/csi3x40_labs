function createGame(n) {
    board = [];

    pacmanindex = n-6;
    fruitindex = n-2;
    ghostindex = n-1;

    board[pacmanindex] = "C";
    board[fruitindex] = "@";
    board[ghostindex] = "^";

    for(var i = 0; i< board.length; i++){
        if(board[i] == null){
            board[i] = ".";
        }
    }
    console.log(board);
    return board;

}

createGame(10);
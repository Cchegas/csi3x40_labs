pacmanindex = 0;
fruitindex = 0;
ghostindex = 0;

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

function moveleft(game) {
    if(pacmanindex == 0){
        game[pacmanindex] = "";
        pacmanindex = n-1;
        game[pacmanindex] = "C";
    }
    else{
        game[pacmanindex] = "";
        pacmanindex--;
        game[pacmanindex] = "C";
    }
    return game;
}

function moveright(game){
    if(pacmanindex == n-1){
        game[pacmanindex] = "";
        pacmanindex = 0;
        game[pacmanindex] = "C";
    }
    else{
        game[pacmanindex] = "";
        pacmanindex++;
        game[pacmanindex] = "C";
    }
    return game;
}


createGame(10);
pacmanindex = 0;
fruitindex = 0;
ghostindex = 0;
score = 0;

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


function moveleft(game){
    n = game.length;
    if(pacmanindex == 0){
        if(game[n-1] = "."){
            score += 1;
            game[pacmanindex] = "";
            pacmanindex = 0;
            game[pacmanindex] = "C";
        }
        else{
            game[pacmanindex] = "";
            pacmanindex = 0;
            game[pacmanindex] = "C";
        }

    }
    else if(game[pacmanindex-1] == "."){
        score += 1;
        game[pacmanindex] = "";
        pacmanindex--;
        game[pacmanindex] = "C";
    }
    console.log(game);
    console.log("the score is: " + score);
    
    if(checkcomplete(game)){
        reset(game);
        console.log(game);
        console.log("the level is completed and the game has been reset");
    }
    
    return game;

}

function moveright(game){
    n = game.length;
    if(pacmanindex == n-1){
        if(game[0] = "."){
            score += 1;
            game[pacmanindex] = "";
            pacmanindex = 0;
            game[pacmanindex] = "C";
        }
        else{
            game[pacmanindex] = "";
            pacmanindex = 0;
            game[pacmanindex] = "C";
        }
        
    }
    else if(game[pacmanindex+1] == "."){
        score += 1;
        game[pacmanindex] = "";
        pacmanindex++;
        game[pacmanindex] = "C";
    }
    console.log(game);
    console.log("the score is: " + score);
    
    if(checkcomplete(game)){
        reset(game);
        console.log(game);
        console.log("the level has been completed and the game has been reset");
    }
    
    return game;
    
}

function checkcomplete(game){
    for(var i = 0; i < game.length; i++){
        if(game[i] == "."){
            return false;
        }
    } return true
}

function reset(game){
    game = createGame(game.length);
    return game;
}



var boardgame = createGame(10);

moveleft(boardgame);
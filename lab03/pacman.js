let pacmanindex = 0;
let fruitindex = 0;
let ghostindex = 0;
let score = 0;

function createGame(n) {
    let board = [];

    pacmanindex = n-6;
    fruitindex = n-2;
    ghostindex = n-1;

    board[pacmanindex] = "C";
    board[fruitindex] = "@";
    board[ghostindex] = "^";

    for (let i = 0; i < n; i++) {
        if (board[i] == null) {
            board[i] = ".";
        }
    }
    console.log(board);
    return board;
}

function moveleft(game) {
    let n = game.length;
    if (pacmanindex == 0) {
        if (game[n-1] == ".") {
            score += 1;
            game[pacmanindex] = "";
            pacmanindex = n-1;
            game[pacmanindex] = "C";
        } else {
            game[pacmanindex] = "";
            pacmanindex = n-1;
            game[pacmanindex] = "C";
        }
    } else if (game[pacmanindex-1] == ".") {
        score += 1;
        game[pacmanindex] = "";
        pacmanindex--;
        game[pacmanindex] = "C";
    }
    console.log(game);
    console.log("Pacman moved left and the score is: " + score);

    if (checkcomplete(game)) {
        game = reset(game);
        console.log(game);
        console.log("the level is completed and the game has been reset");
    }

    return game;
}

function moveright(game) {
    let n = game.length;
    if (pacmanindex == n-1) {
        if (game[0] == ".") {
            score += 1;
            game[pacmanindex] = "";
            pacmanindex = 0;
            game[pacmanindex] = "C";
        } else {
            game[pacmanindex] = "";
            pacmanindex = 0;
            game[pacmanindex] = "C";
        }
    } else if (game[pacmanindex+1] == ".") {
        score += 1;
        game[pacmanindex] = "";
        pacmanindex++;
        game[pacmanindex] = "C";
    }
    console.log(game);
    console.log("pacman moved right and the score is: " + score);

    if (checkcomplete(game)) {
        game = reset(game);
        console.log(game);
        console.log("the level has been completed and the game has been reset");
    }

    return game;
}

function checkcomplete(game) {
    for (let i = 0; i < game.length; i++) {
        if (game[i] == ".") {
            return false;
        }
    }
    return true;
}

function reset(game) {
    game = createGame(game.length);
    return game;
}

function moveGhost(game) {
    let n = game.length;
    let direction = Math.random() < 0.5 ? -1 : 1; // Randomly choose -1 (left) or 1 (right)

    if (direction === -1) { // Move left
        if (ghostindex == 0) {
            if (game[n-1] == ".") {
                game[ghostindex] = ".";
                ghostindex = n-1;
                game[ghostindex] = "^";
            } else {
                game[ghostindex] = ".";
                ghostindex = n-1;
                game[ghostindex] = "^";
            }
        } else if (game[ghostindex-1] == ".") {
            game[ghostindex] = ".";
            ghostindex--;
            game[ghostindex] = "^";
        }
    } else { // Move right
        if (ghostindex == n-1) {
            if (game[0] == ".") {
                game[ghostindex] = ".";
                ghostindex = 0;
                game[ghostindex] = "^";
            } else {
                game[ghostindex] = ".";
                ghostindex = 0;
                game[ghostindex] = "^";
            }
        } else if (game[ghostindex+1] == ".") {
            game[ghostindex] = ".";
            ghostindex++;
            game[ghostindex] = "^";
        }
    }
    console.log(game);
}

let boardgame = createGame(10);
moveleft(boardgame);
moveright(boardgame);
// Move the ghost every 2 seconds
setInterval(() => {
    moveGhost(boardgame);
}, 2000);
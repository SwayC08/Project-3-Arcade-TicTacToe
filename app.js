// user display
let mainElement = document.getElementsByTagName("main-section");
let inputPrompt1 = document.getElementById("input1");
let inputPrompt2 = document.getElementById("input2");
let inputPrompt3 = document.getElementById("input3");
let outputStatus = document.getElementById("output");
// create game board
let board = document.getElementsByClassName("board")[0];
let cell = document.getElementsByClassName("cell")[0];
let numCell = document.getElementsByClassName("cell")[1];

// troubleshoot values
    // let nameP1 = "Player 1;
    // let nameP2 = "Player 2";
let numOfPlayers = 2;

// Display name function
    // name prompt
let nameP1 = prompt("Enter Player Name"); 
function enterName(){
        inputPrompt1.textContent = "Player 1: " + nameP1;
        return nameP1;
    };
window.addEventListener("DOMContentLoaded", enterName);

// Display number of players function
    // number of players prompt
// let numOfPlayers = prompt("Enter number of players:");
function enterNumPlayers(){
    inputPrompt3.textContent = numOfPlayers + "-player mode ";
// P1 vs Computer Mode (insert function);

    // if numOfPlayers = 2
// P1 vs P2 Mode (insert function)
};
window.addEventListener("DOMContentLoaded", enterNumPlayers);

// 2-player mode     
    // name prompt
let nameP2 = prompt("Enter Player 2 Name");    
function enterName2(){
    inputPrompt2.textContent = "Player 2: " + nameP2;
    return nameP2;
};
window.addEventListener("DOMContentLoaded", enterName2);

// Game State Variables
    // currentPlayer initial value 
let currentPlayer = undefined;
    // creates random boolean
let randomStartPick = Math.random() < 0.5;
    // assign value to players (P1 = true , P2 = false)
if (randomStartPick == true){
    currentPlayer = nameP1;
} else {
    currentPlayer = nameP2;
};

// game board
let gameBoard = [];

// button actions
function buttonSelect(event){
    let targetNumCell = parseInt(event.target.classList[1])
    gameBoard[targetNumCell] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.style.fontSize = "50px";
    if (currentPlayer ===  nameP1){
        event.target.style.backgroundColor = "red";
        event.target.textContent = "X";
        currentPlayer =  nameP2;
    } else {
        event.target.style.backgroundColor = "blue";
        event.target.textContent = "O";
        currentPlayer = nameP1;
    };
// stop override filled cell
    if(event.target != undefined){
        event.target.removeEventListener('click', buttonSelect);
    };
    
// Player 1 winning conditions
    if (gameBoard[0] == nameP1 && gameBoard[1] === nameP1 && gameBoard[2] === nameP1){
        outputStatus.textContent = nameP1 + " Wins!";
        gameOver();
        return
    };
    if (gameBoard[3] == nameP1 && gameBoard[4] === nameP1 && gameBoard[5] === nameP1){
        outputStatus.textContent = nameP1 + " Wins!";
        gameOver();
        return;
    };
    if (gameBoard[6] == nameP1 && gameBoard[7] === nameP1 && gameBoard[8] === nameP1){
        outputStatus.textContent = nameP1 + " Wins!";
        gameOver();
        return;    
    };
    if (gameBoard[0] == nameP1 && gameBoard[3] === nameP1 && gameBoard[6] === nameP1){
        outputStatus.textContent = nameP1 + " Wins!";
        gameOver();
        return;    
    };
    if (gameBoard[1] == nameP1 && gameBoard[4] === nameP1 && gameBoard[7] === nameP1){
        outputStatus.textContent = nameP1 + " Wins!";
        gameOver();
        return;    
    };
    if (gameBoard[2] == nameP1 && gameBoard[5] === nameP1 && gameBoard[8] === nameP1){
        outputStatus.textContent = nameP1 + " Wins!";
        gameOver();
        return;    
    };
    if (gameBoard[0] == nameP1 && gameBoard[4] === nameP1 && gameBoard[8] === nameP1){
        outputStatus.textContent = nameP1 + " Wins!";
        gameOver();
        return; 
    };
    if (gameBoard[2] == nameP1 && gameBoard[4] === nameP1 && gameBoard[6] === nameP1){
        outputStatus.textContent = nameP1 + " Wins!";
        gameOver();
        return;  
    };

// Player 2 winning conditions
    if (gameBoard[0] == nameP2 && gameBoard[1] === nameP2 && gameBoard[2] === nameP2){
        outputStatus.textContent = nameP2 + " Wins!";
        gameOver();
        return;
    };
    if (gameBoard[3] == nameP2 && gameBoard[4] === nameP2 && gameBoard[5] === nameP2){
        outputStatus.textContent = nameP2 + " Wins!";
        gameOver();
        return;
    };
    if (gameBoard[6] == nameP2 && gameBoard[7] === nameP2 && gameBoard[8] === nameP2){
        outputStatus.textContent = nameP2 + " Wins!";
        gameOver();
        return;    
    };
    if (gameBoard[0] == nameP2 && gameBoard[3] === nameP2 && gameBoard[6] === nameP2){
        outputStatus.textContent = nameP2 + " Wins!";
        gameOver();
        return;    
    };
    if (gameBoard[1] == nameP2 && gameBoard[4] === nameP2 && gameBoard[7] === nameP2){
        outputStatus.textContent = nameP2 + " Wins!";
        gameOver();
        return;    
    };
    if (gameBoard[2] == nameP2 && gameBoard[5] === nameP2 && gameBoard[8] === nameP2){
        outputStatus.textContent = nameP2 + " Wins!";
        gameOver();
        return;    
    };
    if (gameBoard[0] == nameP2 && gameBoard[4] === nameP2 && gameBoard[8] === nameP2){
        outputStatus.textContent = nameP2 + " Wins!";
        gameOver();
        return; 
    };
    if (gameBoard[2] == nameP2 && gameBoard[4] === nameP2 && gameBoard[6] === nameP2){
        outputStatus.textContent = nameP2 + " Wins!";
        gameOver();
        return;  
    };

// End game in draw
    if (!gameBoard.includes(undefined)){
        outputStatus.textContent = "Game Ends in a Draw";
        gameOver();
        return;
    } else {
        outputStatus.textContent = currentPlayer + " it's your turn, please make a selection.";
    };
};

// build board
function buildBoard(){
    for (let numCell = 0; numCell <= 8; numCell++){       
        gameBoard.push(undefined);
        let newCell = document.createElement("button");     
        newCell.classList.add("cell");
        newCell.classList.add(numCell);
        board.style.backgroundColor = "black";  
        newCell.addEventListener('click', buttonSelect);
        outputStatus.textContent = currentPlayer + " was randomly chosen to go first. Please make a selection."; 
        board.appendChild(newCell);
    };
};
window.addEventListener("DOMContentLoaded",buildBoard);

// reset button
function gameOver(){
    let resetButton = document.createElement("button");
    resetButton.textContent = "Reset Game";
    resetButton.style.backgroundColor = "lightgray";
    function reloadPage (){
        location.reload();
    };
    resetButton.addEventListener('click', reloadPage);
    outputStatus.appendChild(resetButton);
};

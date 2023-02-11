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

// let playerArray = [nameP1, nameP2];

// troubleshoot values
// let nameP1 = "Josue";
// let nameP2 = "Chelsey";
let numOfPlayers = 2;
// troubleshoot values

// combine all game setup questions into 1 function
// Display name function
    // name prompt
let nameP1 = prompt("Enter Player Name"); 
function enterName(){
// show name entered
        inputPrompt1.textContent = "Player 1: " + nameP1;
        // console.log(enterName())
        return nameP1;
    };
window.addEventListener("DOMContentLoaded", enterName);

// Display number of players function
    // number of players prompt
// let numOfPlayers = prompt("Enter number of players:");
function enterNumPlayers(){
// show player mode 
    inputPrompt3.textContent = numOfPlayers + "-player mode ";
    // if numOfPlayers = 1
// P1 vs Computer Mode (insert function);

    // if numOfPlayers = 2
// P1 vs P2 Mode (insert function)
};
window.addEventListener("DOMContentLoaded", enterNumPlayers);

// 2-player mode     
    // name prompt
let nameP2 = prompt("Enter Player 2 Name");    
function enterName2(){
// show second name; or "computer"
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

let gameBoard = [];

function buttonSelect(event){
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.classList[1])
    // console.log(typeof event.target.classList[1])
    let targetNumCell = parseInt(event.target.classList[1])
    // console.log(typeof targetNumCell)
    gameBoard[targetNumCell] = currentPlayer;
    console.log(gameBoard);
    console.log(targetNumCell);
    // console.log(gameBoard.indexOf());
    event.target.textContent = currentPlayer;
    event.target.style.fontSize = "50px";
    // outputStatus.textContent = currentPlayer;
    if (currentPlayer ===  nameP1){
        event.target.style.backgroundColor = "red";
        event.target.textContent = "X";
        currentPlayer =  nameP2;
        // console.log(currentPlayer);
    } else {
        event.target.style.backgroundColor = "blue";
        event.target.textContent = "O";
        currentPlayer = nameP1;
        // console.log(currentPlayer);
    };
// stop override filled cell (if button filled, cant select)
    if(event.target != undefined){
        event.target.removeEventListener('click', buttonSelect);
    };
    
// // Player 1 winning conditions
    if (gameBoard[0] == nameP1 && gameBoard[1] === nameP1 && gameBoard[2] === nameP1){
        outputStatus.textContent = nameP1 + " Wins!";
        gameOver();
        newCell.removeEventListener('click', buttonSelect);
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
        outputStatus.textContent = nameP2 + " Wins!"
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
// End game in draw, out of empty cells
    if (!gameBoard.includes(undefined)){
        outputStatus.textContent = "Game Ends in a Draw";
        gameOver();
        return;
    } else {
        outputStatus.textContent = currentPlayer + " it's your turn, please make a selection.";
    };
};

function buildBoard(){
    for (let numCell = 0; numCell <= 8; numCell++){
// give cells initial value of undefined        
        gameBoard.push(undefined);
// creates buttons
        let newCell = document.createElement("button");
// add class cell      
        newCell.classList.add("cell");
// add class numCell
        newCell.classList.add(numCell);
// add style 
        board.style.backgroundColor = "black";
// add event listener to all buttons    
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
    // resetButton.style.display = "flex";
    // resetButton.style.flexDirection = "row";
    // resetButton.style.justifyContent = "space-between";
    resetButton.addEventListener('click', reloadPage);
    outputStatus.appendChild(resetButton);
};





// // add when match is over (player win or draw)  // keyword break
// // reset all values & start over


// possible player selection function Even or Odd
// function  p1VSp2(currentPlayer){
//     if (currentPlayer % 2 == 0) {
//         return nameP1
//     } else {
//         return nameP2 }
// };


// // add win conditions (Array inside array)
// // win conditions in true/false array - 8 combinations for true & 8 for false 
// // [x,x,x] 

// // check win conditions loop; end at win or draw

 // let winCon = [ 
    //     [0,1,2],
    //     [3,4,5],
    //     [6,7,8],
    //     [0,3,6],
    //     [1,4,7],
    //     [2,5,8],
    //     [0,4,8],
    //     [2,4,6]
    // ];
    // for (let i = 0; i < gameBoard.length; i++){
    //     let winCon = gameBoard[i];
    //     console.log(winCon);
    //     console.log(gameBoard[i]);
    //     let xTrack = 1;
    //     let oTrack = 1;
    //     for (let nestedI = 0; nestedI < gameBoard.length; nestedI++){
    //         if (winCon[nestedI] === nameP1){
    //             xTrack = xTrack + 1;
    //         } else {
    //             oTrack = oTrack + 1;
    //         };
    //     };
    // };
    // if(xTrack === 3){
    //     outputStatus.textContent = nameP1 + " Wins!"
    // };


    // clone gameBoard & use to compare win conditions
    // let p1WinCond = [ 
    //     [nameP1, nameP1, nameP1]
    //     // [nameP1, nameP1, nameP1],
    //     // [nameP1, nameP1, nameP1]
    // ];



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

// let gameState = {
//         players: [ , ]    
// };

// let playerArray = [nameP1, nameP2];

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
let numOfPlayers = prompt("Enter number of players:");
function enterNumPlayers(){
// show player mode 
    inputPrompt3.textContent = numOfPlayers + "-player mode selected.";
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

let gameBoard = [ ];

function buttonSelect(event){
    // console.log(event)
    console.log(event.target)
    // console.log(event.target.classList[1])
    // console.log(typeof event.target.classList[1])
    let targetNumCell = parseInt(event.target.classList[1])
    console.log(typeof targetNumCell)
    gameBoard[targetNumCell] = currentPlayer;
    console.log(gameBoard);
    console.log(targetNumCell);
    event.target.textContent = currentPlayer;
    event.target.style.fontSize = "50px";
    // event.target.style.backgroundColor = "red";
    // outputStatus.textContent = currentPlayer;
    if (currentPlayer ==  nameP1){
        currentPlayer =  nameP2;
        event.target.style.backgroundColor = "red";
        event.target.textContent = "X";
        // console.log(currentPlayer);
    } else {
        currentPlayer = nameP1;
        event.target.style.backgroundColor = "blue";
        event.target.textContent = "O";
        // console.log(currentPlayer);
    }; 
    outputStatus.textContent = currentPlayer + " it is your turn, please make a selection.";
};

function buildBoard(){
    for (let numCell = 0; numCell <= 8; numCell++){
// give cells initial value of undefined        
        gameBoard.push(undefined);
// creates buttons
        let newCell = document.createElement("button");
// add class cell & style     
        newCell.classList.add("cell");
// add class numCell
        newCell.classList.add(numCell);
        board.style.backgroundColor = "black";
// add event listener to all buttons    
        // newCell.addEventListener('click', buttonSelect);
        newCell.addEventListener('click', buttonSelect);
        outputStatus.textContent = currentPlayer + " was randomly chosen to go first. Please make a selection."; 
        board.appendChild(newCell);
    };
};
window.addEventListener("DOMContentLoaded",buildBoard);





// possible player selection function Even or Odd
// function  p1VSp2(currentPlayer){
//     if (currentPlayer % 2 == 0) {
//         return nameP1
//     } else {
//         return nameP2 }
// };


// * Array.isArray(nameOfArray)
// - This will return a boolean indicating whether the argument passed into this method is an array or not. (true if it is, false if not)

// * nameOfArray.shift() 
//     - This method will remove the first element in an array
//     - This method will return the element that you removed. 
//     - Note: No arguments necessary


// gameState.players   = current player


// for(let indexP = 0; indexP < playerArray.length, indexP++){
//     let list = playerArray[indexP];   
// };


// // add win conditions (Array inside array)
// // win conditions in true/false array - 8 combinations for true & 8 for false 
// // [x,x,x] 

// // check win conditions loop; end at win or draw

//(Loop = state condition (current player), end conditions for player turn, check win conditions) 


// // make copy of array board to use for selections 
// // array cell value # of undefined left = selections available 
// // function to remove cell selected from array, 
// // remove cell selected from array
// // game could end when no more cells are in board array or meets winning conditions 


// // reset button
// // add when match is over (player win or draw)  // keyword break
// // reset all values & start over


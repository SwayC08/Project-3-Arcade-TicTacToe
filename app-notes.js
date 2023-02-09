// create game board
let board = document.getElementsByClassName("board")[0];
let cell = document.getElementsByClassName("cell")[0];
let numCell = document.getElementsByClassName("cell")[1];

let gameState = {
//     players: [ "X", "O"],
};

let nameP1 = "X";
let nameP2 = "O";
// let playerArray = [nameP1, nameP2];

let currentPlayer = undefined;
let randomStartPick = Math.random() < 0.5;
if (randomStartPick == true){
    currentPlayer = nameP1;
} else {
    currentPlayer = nameP2;
};

let gameBoard = [ ];

function currentStatus(event){
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
        // console.log(currentPlayer);
    } else {
        currentPlayer = nameP1;
        // console.log(currentPlayer);
    }; 
    outputStatus.textContent = currentPlayer + " it is your turn, please make a selection.";
};

function buildBoard(){
    for (let numCell = 0; numCell <= 8; numCell++){
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
        newCell.addEventListener('click', currentStatus);
        outputStatus.textContent = currentPlayer + " was randomly chosen to go first. Please make a selection."; 
        board.appendChild(newCell);
    };
};
window.addEventListener("DOMContentLoaded",buildBoard);












        // function buttonSelect(){
            // console.log(event)
        //     // console.log(event.target)
        //     // console.log(event.classList)
        //     if (currentPlayer === nameP1){
        //         newCell.textContent = "X";
        //         newCell.style.backgroundColor = "red";
        //         newCell.style.fontSize = "50px";
        // //         console.log(currentPlayer)
        // //         console.log(typeof currentPlayer)
        //     } else {
        //         newCell.textContent = "O";
        //         newCell.style.backgroundColor = "blue";
        //         newCell.style.fontSize = "50px";
        //     };
            // newCell.addEventListener('click', currentStatus);
// Display current player function 
            // let currentPlayer = nameP1;

            
            // currentStatus();
            // newCell.addEventListener('click', currentStatus);
            // console.log(currentStatus());
        // };
        // console.log(buttonSelect());
//     };
// };


// let buttonClick = undefined;
// newCell.addEventListener('click', currentStatus);
// let buttonClick = true;
// make buttonClick = current player turn

// changes current player to 2 (false) & if ran again changes p2 to p1          

let mainElement = document.getElementsByTagName("main-section");
let inputPrompt1 = document.getElementById("input1");
let inputPrompt2 = document.getElementById("input2");
let inputPrompt3 = document.getElementById("input3");
let outputStatus = document.getElementById("output");

// function setupGame(){
// Display name function
function enterName(){
// name prompt
    let nameP1 = prompt("Enter Player Name"); 
// show name entered
    inputPrompt1.textContent = "Player 1: " + nameP1;
    // console.log(enterName())
    // return nameP1;
};
// window.addEventListener("DOMContentLoaded", enterName);

// Display number of players function
function enterNumPlayers(){
// number of players prompt
    let numOfPlayers = prompt("Enter number of players:");
// show player mode 
    inputPrompt3.textContent = numOfPlayers + "-player mode selected.";
    // if numOfPlayers = 1
// P1 vs Computer Mode (insert function);

    // if numOfPlayers = 2
// P1 vs P2 Mode (insert function)
};
// window.addEventListener("DOMContentLoaded", enterNumPlayers);

// // 2-player mode 
function enterName2(){
// name prompt
    let nameP2 = prompt("Enter Player 2 Name");
// show second name; or "computer"
    inputPrompt2.textContent = "Player 2: " + nameP2;
};
// window.addEventListener("DOMContentLoaded", enterName2);


// // display status of game : player turn (change style of player selected or display  " + player name +" it is your turn, please make a selection.)


// // enter function to make selection random at start of game
// random boolean ; between 1 & 0 ; returns true or false value
// console.log(Math.random() < 0.5);



// // Display currentPlayer"
// function showCurrentP(){
//     outputStatus.textContent = currentPlayer + " it is your turn, please make a selection.)";
// };
// window.addEventListener("DOMContentLoaded", showCurrentP);


// possible player selection function Even or Odd
// function  p1VSp2(currentPlayer){
//     if (currentPlayer % 2 == 0) {
//         return nameP1
//     } else {
//         return nameP2 }
// };

// while (currentPlayer == nameP1){

// };

// while (currentPlayer == nameP2){

// };

// // // player selection 
// let playerArray = [nameP1, nameP2]

// const gameState = {
//     players: [ "X", "O"],
    
//     board: [
//         [undefined, undefined, undefined],
//         [undefined, undefined, undefined],
//         [undefined, undefined, undefined]
//     ]
// };


// * Array.isArray(nameOfArray)
// - This will return a boolean indicating whether the argument passed into this method is an array or not. (true if it is, false if not)

// * nameOfArray.shift() 
//     - This method will remove the first element in an array
//     - This method will return the element that you removed. 
//     - Note: No arguments necessary



// let currentPlayer = nameP1;
// if (currentPlayer =  nameP1){
//     let currentPlayer =  nameP2;
// } else {
//     let currentPlayer = nameP1;
// };
// };
// window.addEventListener("DOMContentLoaded", setupGame);

// gameState.players   = current player
    
// for(let indexP = 0; indexP < playerArray.length, indexP++){
//     let list = playerArray[indexP];
    
// //     
// };


// let button0 = document.getElementById("b-0");
// let button1 = document.getElementById("b-1");
// let button2 = document.getElementById("b-2");
// let button3 = document.getElementById("b-3");
// let button4 = document.getElementById("b-4");
// let button5 = document.getElementById("b-5");
// let button6 = document.getElementById("b-6");
// let button7 = document.getElementById("b-7");
// let button8 = document.getElementById("b-8");


// // 9 buttons in array 
// // let board = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8]
// // cell initial values   // make array cell initial value undefined (unknown until clicked)
// let cell0 = undefined;
// let cell1 = undefined;
// let cell2 = undefined;
// let cell3 = undefined;
// let cell4 = undefined;
// let cell5 = undefined;
// let cell6 = undefined;
// let cell7 = undefined;
// let cell8 = undefined;


// // P1 button selection function // make boolean when clicked
// // player 1: cell value = true  (upon selection & make button un-clickable)
// let cellArray = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8]

// function p1ButtonSelect(event){
//     currentPlayer = true;
//     // add event target  to currentPlayer p1 true , p2 false
//     if (currentPlayer === true){
//         newCell.textContent = "X";
//         newCell.style.backgroundColor = "red";
//         newCell.style.fontSize = "50px";
//         cell0.style.backgroundColor = "red";
//     };
//     // may add else statement p2ButtonSelect condition 
// };
// // add event listener to cell clicked
// board.addEventListener('click', p1ButtonSelect);



// // button0.addEventListener('click', p2ButtonSelect);

// // change players turn (player 2 or computer)
//     // current player function   // keyword continue
// // let currentPlayer = 
// function currentPlayerSelection(){
//     if (currentPlayer = nameP1){
// //        run function for player 1 selection
//     };

//     if (currentPlayer = nameP2){
// //        run function for player 2 selection
//     };
// };

// // P2 button selection function // make boolean when clicked
// // player 2: cell value = false  (upon selection & make button un-clickable)
// function p2ButtonSelect(){
// // board[cell selected] = false;
//     let currentPlayer = false;
//     if (currentPlayer === false){
//         newCell.textContent = "O";
//         newCell.style.backgroundColor = "blue";
//         newCell.style.fontSize = "50px";
//     };
// };
// // add event listener to cell clicked
// // button0.addEventListener('click', p2ButtonSelect);


// // add event listener to cell clicked
// // currentPlayerSelection.addEventListener('click', p2ButtonSelect);








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



// // 2-player mode 
// function showComputer(){
//     // Display second name "computer"
//         inputPrompt2.textContent = "Player 2: Computer";
//     };





        // newCell.addEventListener('click', )
        // newCell.addEventListener('click', function(){
            // if (currentPlayer ===  true){
            //     newCell.textContent = "X";
            //     newCell.style.backgroundColor = "red";
            //     newCell.style.fontSize = "50px";
            // } else {
            //     newCell.textContent = "O";
            //     newCell.style.backgroundColor = "blue";
            //     newCell.style.fontSize = "50px";
            // }; 
        // });   



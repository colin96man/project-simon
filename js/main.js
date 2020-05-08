//Constants:
    //buttons:
        //game start button & the four clickable game buttons
        //each triangle will be assigned a number
    //board:
        //grid square with four colored triangles, not lighting up

const redTri = 1;
const blueTri = 2;
const grnTri = 3;
const ylwTri = 4;
const board = [redTri, blueTri, grnTri, ylwTri];

//State variable:    
    //game over prompt with how many correct button pushes the player had
    //round number
    //simonsPattern is an array that will hold which buttons that are selected at random that the layer needs to copy
    //playersPattern is an array that will hold which buttons the player chooses

let gameOver;
let winner;
let roundNum;
let simonsPattern;
let playersPattern;


//Event listeners:
    //create event listener for clicking the triangle divs, which will "light up" the traingle
    //create event listener for clicking the reset button which will call init
    //create event listener for clicking the game start button, calling the function to start the first round

document.getElementById('reset-btn').addEventListener('click', init);

document.getElementById('arrow-down').addEventListener('click', playerClickRed);
document.getElementById('arrow-left').addEventListener('click', playerClickBlue);
document.getElementById('arrow-right').addEventListener('click', playerClickGrn);
document.getElementById('arrow-up').addEventListener('click', playerClickYlw);


//Initialize:
    //board
    //simonsPattern array is an empty array
    //playersPattern array is an empty array
    //the round will be reset to round 0
    //game over logic (null)
    //win logic (null)
    //render
init()

function init() {
    console.log('click');
    let simonsPattern = [];
    let playersPattern = [];
    let winner = null;
    let gameOver = null;
    let roundNum = 0;
    render()
}

//Render:
    //call renderBoard
    //check for game over
    //if game over display game over and correct amount of button pushes
    //after round 10 check for win

function render () {
    
}

//renderBoard:
    //if game has not been started or a round is not running then styling should not change
    //for each triangle chosen change the styling to show it "lighting up"

function renderBoard() {

}

//create a function that will randomly select triangles using Math

function randomPick() {

}

//create function for the asynchronus timing of how long a triangle will be "lit up"
    //each triangle's style will change and then return to normal in the same amount of time

function timing() {

}

//create functions for the different rounds:
    //each round will increment up by one on how many times simon chooses a random triangle 
    //render



//create function for the player click event:
    //clicking one of the triangles will change the style just like when a random triangle is selected
    //clicked element will call the timing function to show it light up for the time alotted
    //render

function playerClick() {
    playerClickRed()
    playerClickBlue()
    playerClickGrn()
    playerClickYlw()
}

function playerClickRed() {
    console.log('top clicked')
}

function playerClickBlue() {
    console.log('clicked left')
}

function playerClickGrn() {
    console.log('clicked right')
}

function playerClickYlw() {
    console.log('clicked bottom')
}

//create functions for rounds
    //call renderBoard after each one so that it will update the DOM
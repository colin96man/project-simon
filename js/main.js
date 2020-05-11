const triangles = {
    top: 'tomato',
    left: 'cyan', 
    right: 'lime',
    bottom: 'lightyellow'
};

const board = [1, 2, 3, 4];

const triangleEl = {
    top: document.querySelector('#arrow-down'),
    left: document.querySelector('#arrow-left'),
    right: document.querySelector('#arrow-right'),
    bottom: document.querySelector('#arrow-up')
};

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

document.getElementById('reset-btn').addEventListener('click', init);

document.getElementById('start-btn').addEventListener('click', round);

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
    //console.log('click');
    let simonsPattern = [];
    let playersPattern = [];
    let winner = null;
    let gameOver = null;
    let roundNum = 0;
    //render()
}

//Render:
    //call renderBoard
    //check for game over
    //if game over display game over and correct amount of button pushes
    //after round 10 check for win

function render () {

}

function randomPick(triangles) {
    let trianglesKeys = Object.keys(triangles);
    return triangles[trianglesKeys[trianglesKeys.length * Math.random() << 0]];
}

//create function for the asynchronus timing of how long a triangle will be "lit up"
    //each triangle's style will change and then return to normal in the same amount of time

function timing(triangle) {
    setTimeout(function() {
        triangleEl.style.backgroundColor = triangles[triangle];
    }, 2000);
}

//create functions for the different rounds:
    //each round will increment up by one on how many times simon chooses a random triangle 
    //render

function round() {
    console.log('start button is working');
}

//create function for the player click event:
    //clicking one of the triangles will change the style just like when a random triangle is selected
    //clicked element will call the timing function to show it light up for the time alotted
    //render

function playerClick() {
    playerClickRed()
    playerClickBlue()
    playerClickGrn()
    playerClickYlw()
    //render()
}

function playerClickRed(top) {
    console.log('top clicked');
    timing();
}

function playerClickBlue() {
    console.log('clicked left');
}

function playerClickGrn() {
    console.log('clicked right');
}

function playerClickYlw() {
    console.log('clicked bottom');
}

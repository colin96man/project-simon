const triangles = [
    {color: 'darkred', light: 'red', time: 1000},
    {color: 'blue', light: 'cyan', time: 1000}, 
    {color: 'green', light: 'lime', time: 1000},
    {color: 'gold', light: 'yellow', time: 1000}
];



const triangleEl = {
    top: document.querySelector('#arrow-down'),
    left: document.querySelector('#arrow-left'),
    right: document.querySelector('#arrow-right'),
    bottom: document.querySelector('#arrow-up')
};

//State variable:    
    //game over prompt with how many rounds the player survived
    //round number
    //simonsPattern is an array that will hold which buttons that are selected at random that the layer needs to copy
    //playersPattern is an array that will hold which buttons the player chooses

let gameOver;
let winner;
let roundNum;
let simonsPattern = [];
let playersPattern = [];

document.getElementById('reset-btn').addEventListener('click', init);

document.getElementById('start-btn').addEventListener('click', gameStart);

document.getElementById('arrow-down').addEventListener('click', playerClickRed);

document.getElementById('arrow-left').addEventListener('click', playerClickBlue);

document.getElementById('arrow-right').addEventListener('click', playerClickGrn);

document.getElementById('arrow-up').addEventListener('click', playerClickYlw);

init();

function init() {
    simonsPattern = [];
    playersPattern = [];
    winner = null;
    gameOver = null;
    roundNum = 0;
    //check()
}

function gameStart() {
    console.log('start button is working');
    for(let i = 0; i < 10; i ++) {
    simonsPattern.push(Math.floor(Math.random() * 4) + 1);
    };
    console.log(simonsPattern);
    
}

//Render:
//call renderBoard
    //check for game over
    //if game over display game over and correct amount of button pushes
    //after round 10 check for win

function check () {

}

function timing() {
    setTimeout(function(target) {
        if(triangleEl.top) {
            triangleEl.top.style.backgroundColor = triangles[0].color;
        }
        if(triangleEl.left) {
            triangleEl.left.style.backgroundColor = triangles[1].color;
        }
        if(triangleEl.right) {
            triangleEl.right.style.backgroundColor = triangles[2].color;
        }
        if(triangleEl.bottom) {
            triangleEl.bottom.style.backgroundColor = triangles[3].color;
        }
    }, 250);
}

function playerClickRed() {
    triangleEl.top.style.backgroundColor = triangles[0].light;
    timing();
    if('click') {
        playersPattern.push(1);
    }
}

function playerClickBlue() {
    triangleEl.left.style.backgroundColor = triangles[1].light;
    timing();
    if('click') {
        playersPattern.push(2);
    }
}

function playerClickGrn() {
    triangleEl.right.style.backgroundColor = triangles[2].light;
    timing();
    if('click') {
        playersPattern.push(3);
    }
}

function playerClickYlw() {
    triangleEl.bottom.style.backgroundColor = triangles[3].light;
    timing();
    if('click') {
        playersPattern.push(4);
    }
}

function compPickOne() {
    triangleEl.top.style.backgroundColor = triangles[0].light;
    timing();
}

function compPickTwo() {
    triangleEl.left.style.backgroundColor = triangles[1].light;
    timing();
}

function compPickThree() {
    triangleEl.right.style.backgroundColor = triangles[2].light;
    timing();
}

function compPickFour() {
    triangleEl.bottom.style.backgroundColor = triangles[3].light;
    timing();
    if('click') {
        playersPattern.push(4);
    }
}
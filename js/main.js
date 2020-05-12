const triangles = [
    {color: 'darkred', light: 'red'},
    {color: 'blue', light: 'cyan'}, 
    {color: 'green', light: 'lime'},
    {color: 'gold', light: 'yellow'}
];



const triangleEl = {
    top: document.querySelector('#arrow-down'),
    left: document.querySelector('#arrow-left'),
    right: document.querySelector('#arrow-right'),
    bottom: document.querySelector('#arrow-up')
};

let gameOver;
let winner;
let roundNum;
let simonsPattern = [];
let playersPattern = [];

document.getElementById('reset-btn').addEventListener('click', init);

document.getElementById('start-btn').addEventListener('click', gameStart);

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
    //console.log('start button is working');
    for(let i = 0; i < 10; i ++) {
    simonsPattern.push(Math.floor(Math.random() * 4) + 1);
    };
    //console.log(simonsPattern);
    roundNum = 1;
    playersPattern = [];
    compTurn();
}

function compTurn() {
    //How to disable event listeners for player
    let loop = 1;
    const playCompPattern = setInterval(function() {
        console.log(loop);
        if(simonsPattern[loop - 1] === 1) compPickOne();
        if(simonsPattern[loop - 1] === 2) compPickTwo();
        if(simonsPattern[loop - 1] === 3) compPickThree();
        if(simonsPattern[loop - 1] === 4) compPickFour();
        if(loop === roundNum) {
            clearInterval(playCompPattern)
            playersTurn();
        }
        loop++;
    }, 800) 
}

function check () {
    //compare playersPattern and simonsPattern
    //every click compare to simonsPattern

    for(let i = 0; i < playersPattern.length; i++) {
        if(playersPattern[i] === simonsPattern[i] && playersPattern.length === simonsPattern.length) {
            return console.log('You Win')
        } 
        if(playersPattern[i] !== simonsPattern[i]) {
            return console.log('Game Over')
        } else {
            roundNum++;
            compTurn();
            console.log('next round')
        }
    }
}

function playersTurn() {
    document.getElementById('arrow-down').addEventListener('click', playerClickRed);
    document.getElementById('arrow-left').addEventListener('click', playerClickBlue);
    document.getElementById('arrow-right').addEventListener('click', playerClickGrn);
    document.getElementById('arrow-up').addEventListener('click', playerClickYlw);
    playersPattern = [];
    check();
}

function timing() {
    setTimeout(function() {
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
    }, 300);
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
}
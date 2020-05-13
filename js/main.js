const triangles = [
    {color: 'darkred', light: 'red'},
    {color: 'blue', light: 'cyan'}, 
    {color: 'green', light: 'lime'},
    {color: 'goldenrod', light: 'yellow'}
];

const triangleEl = {
    top: document.querySelector('#arrow-down'),
    left: document.querySelector('#arrow-left'),
    right: document.querySelector('#arrow-right'),
    bottom: document.querySelector('#arrow-up')
};

const button = document.getElementById('start-btn');

let roundNum;
let simonsPattern = [];
let playersPattern = [];

document.getElementById('reset-btn').addEventListener('click', init);

document.getElementById('start-btn').addEventListener('click', gameStart);

init();

function init() {
    simonsPattern = [];
    playersPattern = [];
    document.getElementById('win').style.color = 'transparent';
    document.getElementById('lose').style.color = 'transparent';
    roundNum = 0;
    button.disabled = false;
}

function gameStart() {
    button.disabled = true;
    for(let i = 0; i < 10; i ++) {
    simonsPattern.push(Math.floor(Math.random() * 4) + 1);
    };
    console.log(simonsPattern);
    roundNum = 1;
    playersPattern = [];
    compTurn();
}

function compTurn() {
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
    let playerVar = playersPattern.join('')
    let simonVar = simonsPattern.slice(0, roundNum).join('')
    if(playerVar === simonVar && roundNum < 10) {
        roundNum++
        compTurn();
    }
    if(playerVar === simonVar && roundNum === playersPattern.length) {
        return  document.getElementById('win').style.color = 'red'
    } 
    if(playerVar !== simonVar) {
        return document.getElementById('lose').style.color = 'red'
    }
}

function checkRound() {
    if(playersPattern.length === roundNum) {
        check();
        return;
    }
}

function playersTurn() {
    playersPattern = [];
    document.getElementById('arrow-down').addEventListener('click', playerClickRed);
    document.getElementById('arrow-left').addEventListener('click', playerClickBlue);
    document.getElementById('arrow-right').addEventListener('click', playerClickGrn);
    document.getElementById('arrow-up').addEventListener('click', playerClickYlw);
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
        checkRound();
    }
}

function playerClickBlue() {
    triangleEl.left.style.backgroundColor = triangles[1].light;
    timing();
    if('click') {
        playersPattern.push(2);
        checkRound();
    }
}

function playerClickGrn() {
    triangleEl.right.style.backgroundColor = triangles[2].light;
    timing();
    if('click') {
        playersPattern.push(3);
        checkRound();
    }
}

function playerClickYlw() {
    triangleEl.bottom.style.backgroundColor = triangles[3].light;
    timing();
    if('click') {
        playersPattern.push(4);
        checkRound();
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
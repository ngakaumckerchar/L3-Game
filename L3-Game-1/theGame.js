window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvasContext = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.style.background = 'black';
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
    document.addEventListener('click', mouseClick);

    setInterval(mainloop, 1000 / 50);
}
//https://www.youtube.com/watch?v=P2i11xnrpNI
window.addEventListener('mousemove', function (e) { //detects mouse movement
    // console.log( e ); 
    mouseX = e.x
    mouseY = e.y
    // console.log(mouseX , mouseY)
});
var canvasContext, imageAssets;
var mouseX = screenX;
var mouseY = screenY;
var bulletArray = [];
// var bulletXpos = (playerXpos + PLAYER_SIZE) / 2;
// var bulletYpos = (playerYpos + PLAYER_SIZE) / 2;
var bulletXpos = mouseX;
var bulletYpos = mouseY;
var bulletWidth = 20;
var bulletHeight = 20;
var bulletSpeed = 5;

var playerXpos = '';
var playerYpos = '';
var playerXspeed = 10;
var playerYspeed = 10;
var PLAYER_SIZE = 100;
const PLAYER_WIDTH = 100;
const PLAYER_HEIGHT = 100;

const D_KEY = 68;
const A_KEY = 65;
const W_KEY = 87;
const S_KEY = 83;

var dKeyPressed = false;
var aKeyPressed = false;
var wKeyPressed = false;
var sKeyPressed = false;
var click = false;

var setup = true;

function mainloop() {

    if (setup) {
        playerXpos = canvas.width * 0.46;
        playerYpos = canvas.height / 2;

        setup = false;
    }
    if (click == true){
        MakeBullet();
    }

    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorRect(playerXpos, playerYpos, PLAYER_WIDTH, PLAYER_HEIGHT, 'blue');
    PlayerMove();
    drawBullet();
}

function colorRect(x, y, w, h, c) {
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}
function MakeBullet(){
    click = false;
    var BULLET_SIZE = 35;
    var bXpos = playerXpos;
    var bYpos = playerYpos;
    var bXspeed = 3;
    var bYspeed = 2;
    var bullet = {
        bXpos: bXpos,
        bYpos: bYpos,
        BULLET_SIZE: BULLET_SIZE,
        bXspeed: bXspeed,
        bYspeed: bYspeed
    // console.log('cum');
}
bulletArray.push(bullet);
}

function drawBullet() {
    bulletArray.forEach(function(e, i, array) {
        colorRect(bulletXpos, bulletYpos, bulletWidth, bulletHeight, 'white');
    });
} //End Function

function keyPressed(evt) {
    if (evt.keyCode == D_KEY) {
        dKeyPressed = true;
    }
    if (evt.keyCode == A_KEY) {
        aKeyPressed = true;
    }
    if (evt.keyCode == W_KEY) {
        wKeyPressed = true;
    }
    if (evt.keyCode == S_KEY) {
        sKeyPressed = true;
    }
}

function mouseClick(event) {
    console.log(event);
    click = true;
    // make a bullet array here it goes in the direction of mouseX and mouseY
}

function keyReleased(evt) {
    if (evt.keyCode == D_KEY) {
        dKeyPressed = false;
    }
    if (evt.keyCode == A_KEY) {
        aKeyPressed = false;
    }
    if (evt.keyCode == W_KEY) {
        wKeyPressed = false;
    }
    if (evt.keyCode == S_KEY) {
        sKeyPressed = false;
    }
}

function PlayerMove() {
    if (dKeyPressed && playerXpos < canvas.width * 0.94) {
        playerXpos += playerXspeed;
    }
    if (aKeyPressed && playerXpos > canvas.width * 0.001) {
        playerXpos -= playerXspeed;
    }
    if (wKeyPressed && playerYpos > canvas.height * 0.001) {
        playerYpos -= playerYspeed;
    }
    if (sKeyPressed && playerYpos < canvas.height * 0.89) {
        playerYpos += playerYspeed;
    }
}
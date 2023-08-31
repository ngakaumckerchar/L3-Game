var canvas = document.getElementById("canvas");
//https://www.youtube.com/watch?v=P2i11xnrpNI
window.addEventListener ('mousemove', function (e){ 
    console.log(e);
});
var canvasContext, imageAssets;

window.onload = function () {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.style.background = 'black';
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);

    setInterval(mainloop, 1000 / 50);
}

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


var setup = true;

function mainloop() {

        if (setup) {
            playerXpos = canvas.width * 0.46;
            playerYpos = canvas.height / 2;

            setup = false;
        }

        colorRect(0, 0, canvas.width, canvas.height, 'black');
        colorRect(playerXpos, playerYpos, PLAYER_WIDTH, PLAYER_HEIGHT, 'blue');

        PlayerMove()
    }

function colorRect(x, y, w, h, c) {
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}

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








//https://codingbeautydev.com/blog/javascript-get-mouse-position/#google_vignette
// const mousePosText = document.getElementById('mouse-pos');
// let mousePos = { x: undefined, y: undefined };
// var mX;
// window.addEventListener('mousemove', (event) => {
//   mousePos = { mX: event.clientX, mY: event.clientY };
//   console.log(mX)
// });
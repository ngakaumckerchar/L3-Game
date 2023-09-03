      var canvas, canvasContext, imageAssets;

        window.onload = function () {
            canvas = document.getElementById('canvas');
            canvasContext = canvas.getContext('2d');
            imageAssets = loadImgAssets();

            document.body.style.background = 'black';
            document.addEventListener('keydown', keyPressed);
            document.addEventListener('keyup', keyReleased);

            setInterval(mainloop, 1000 / 50);
        }

        var playerXsource = 2;
        var playerYsource = '';
        var playerWsource = 17;
        var playerXpos = '';
        var playerYpos = '';
        var playerXspeed = 10;
        var playerYspeed = 10;
        var PLAYER_SIZE = 100;
        var PLAYER_WIDTH = 110;
        var PLAYER_HEIGHT = 150;

        var playerSpriteArray = [];
        const PLAYER_SPRITES = 12;
        var playerSpriteNum = 0;
        var playerSpriteSheetCols = 0;
        var aniFrameRate = 0.3;

        const D_KEY = 68;
        const A_KEY = 65;
        const W_KEY = 87;
        const S_KEY = 83;

        var dKeyPressed = false;
        var aKeyPressed = false;
        var wKeyPressed = false;
        var sKeyPressed = false;

        var gameRun = true;

        var setup = true;

        function mainloop() {
            if (gameRun) {

                if (setup) {
                    playerXpos = canvas.width * 0.46;
                    playerYpos = canvas.height / 2;

                    setup = false;
                }

                colorRect(0, 0, canvas.width, canvas.height, 'grey');
                drawSprite(imageAssets.player, playerXsource, playerYsource, playerWsource, 21, playerXpos,
                    playerYpos, PLAYER_WIDTH, PLAYER_HEIGHT);

                PlayerMove()
                spriteMove()

            }
        }

        function loadImgAssets() {
            imgs = {};

            imgs.player = new Image();
            imgs.player.src = "images/player3.png";

            return imgs;
        }

        function spriteMove() {

            if (wKeyPressed) {
                playerYsource = 23;
                playerWsource = 17;
                playerXsource = 2;
                PLAYER_WIDTH = 110;  
            }
            
            if (sKeyPressed) {
                playerYsource = 2;
                playerWsource = 17;
                playerXsource = 2;
                PLAYER_WIDTH = 110;
            }
           
            if (aKeyPressed) {
                playerYsource = 44;
                playerXsource = 1;
                playerWsource = 23;
                PLAYER_WIDTH = 150;
            }
           
            if (dKeyPressed) {
                playerYsource = 65;
                playerXsource = 2;
                playerWsource = 23;
                PLAYER_WIDTH = 150;
                
            }
        }

        function colorRect(x, y, w, h, c) { // establishes position variables for drawing objects
            canvasContext.fillStyle = c;
            canvasContext.fillRect(x, y, w, h);
        }

        function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
            canvasContext.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
        }

        function drawImg(src, x, y, w, h) {
            canvasContext.drawImage(src, x, y, w, h)
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

            if (dKeyPressed && playerXpos < canvas.width * 0.935) {
                playerXpos += playerXspeed;
            }
            if (aKeyPressed && playerXpos > canvas.width * -0.014) {
                playerXpos -= playerXspeed;
            }
            if (wKeyPressed && playerYpos > canvas.height * 0.001) {
                playerYpos -= playerYspeed;
            }
            if (sKeyPressed && playerYpos < canvas.height * 0.85) {
                playerYpos += playerYspeed;
            }



        }
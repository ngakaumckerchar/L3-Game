    var canvas, canvasContext, imageAssets;

      window.onload = function () {
          canvas = document.getElementById('canvas');
          canvasContext = canvas.getContext('2d');
          canvas.width = 1900;
          canvas.height = 940;
          imageAssets = loadImgAssets();

          document.body.style.background = 'black';
          document.addEventListener('keydown', keyPressed);
          document.addEventListener('keyup', keyReleased);

      }

      const player = {
        x: 0,
        y: 0,
        width: 25,
        height: 21.75,
        frameX: 0,
        frameY: 0,
        speed: 9,
        moving: false
      };

      const D_KEY = 68;
      const A_KEY = 65;
      const W_KEY = 87;
      const S_KEY = 83;

      var dKeyPressed = false;
      var aKeyPressed = false;
      var wKeyPressed = false;
      var sKeyPressed = false;

      const playerSprite = new Image();
      playerSprite.src = "images/player4.png";
      

      function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
          canvasContext.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
      }

      function animate(){
        drawSprite(playerSprite, 0, 0, player.width, player.height, 0, 0, player.width, player.height);
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


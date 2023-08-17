var canvas = document.getElementById("canvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener ('mousemove', function (e){ 
    //https://www.youtube.com/watch?v=P2i11xnrpNI
    console.log(e);
});









//https://codingbeautydev.com/blog/javascript-get-mouse-position/#google_vignette
// const mousePosText = document.getElementById('mouse-pos');
// let mousePos = { x: undefined, y: undefined };
// var mX;
// window.addEventListener('mousemove', (event) => {
//   mousePos = { mX: event.clientX, mY: event.clientY };
//   console.log(mX)
// });
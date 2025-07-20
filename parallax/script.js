/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

const bgLayer1 = new Image();
bgLayer1.src = "layer-1.png";
const bgLayer2 = new Image();
bgLayer2.src = "layer-2.png";
const bgLayer3 = new Image();
bgLayer3.src = "layer-3.png";
const bgLayer4 = new Image();
bgLayer4.src = "layer-4.png";
const bgLayer5 = new Image();
bgLayer5.src = "layer-5.png";
/** @type {HTMLImageElement[]} */

let x = 0;
let x2 = 2400; // second identical image starts at 2400px
let gameSpeed = 25;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(bgLayer4, x, 0);
  ctx.drawImage(bgLayer4, x2, 0);
  if (x < -2400) x = 2400 + x2 - gameSpeed;
  else x -= gameSpeed;
  if (x2 < -2400) x2 = 2400 + x - gameSpeed;
  else x2 -= gameSpeed;

  requestAnimationFrame(animate);
}

animate();

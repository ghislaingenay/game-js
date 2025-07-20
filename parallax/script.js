import BackgroundLayer from "./background_color.js";

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

let gameSpeed = 25;

const layers = [
  new BackgroundLayer(bgLayer1, 0.2, gameSpeed),
  new BackgroundLayer(bgLayer2, 0.4, gameSpeed),
  new BackgroundLayer(bgLayer3, 0.6, gameSpeed),
  new BackgroundLayer(bgLayer4, 0.8, gameSpeed),
  new BackgroundLayer(bgLayer5, 1, gameSpeed),
];

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  layers.forEach((layer) => {
    layer.update(gameSpeed);
    layer.draw(ctx);
  });
  requestAnimationFrame(animate);
}

animate();

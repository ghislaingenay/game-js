import Enemy from "./enemy.js";
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

const enemy1 = new Enemy(0, 0, 200, 200);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // Draw each layer
  enemy1.update();
  enemy1.draw(ctx);

  requestAnimationFrame(animate);
}

animate();

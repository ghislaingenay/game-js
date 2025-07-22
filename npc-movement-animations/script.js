import { SoulEaterEnemy } from "./enemy.js";
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const numberOfEnemies = 30;
let gameFrame = 0;

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

const enemies = [];
Array.from({ length: numberOfEnemies }).forEach(() => {
  const x = Math.random() * CANVAS_WIDTH;
  const y = Math.random() * CANVAS_HEIGHT;

  enemies.push(new SoulEaterEnemy(x, y));
});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // Draw each layer
  enemies.forEach((enemy) => {
    enemy.update(gameFrame);
    enemy.draw(ctx);
  });

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();

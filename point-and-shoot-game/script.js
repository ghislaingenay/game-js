import Raven from "./raven.js";
import Explosion from "./explosion.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("gameCanvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
/** @type {HTMLCanvasElement} */
const collisionCanvas = document.getElementById("collisionCanvas");
/** @type {CanvasRenderingContext2D} */
const collisionCtx = collisionCanvas.getContext("2d", {
  willReadFrequently: true,
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

collisionCanvas.width = window.innerWidth;
collisionCanvas.height = window.innerHeight;

let timeToNextRaven = 0;
let ravenInterval = 500; // 1 second interval for spawning ravens
let lastTime = 0;
let score = 0;
let gameOver = false;

let ravens = [];
let explosions = [];

function drawScore(ctx) {
  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`Score: ${score}`, 10, 30);
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${score}`, 11, 31);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ravens.forEach((raven) =>
    raven.updateCanvasSize(canvas.width, canvas.height)
  );
});

window.addEventListener("click", (event) => {
  // needs to do it witout img to avoid cross error
  const detectPixelColor = collisionCtx.getImageData(event.x, event.y, 1, 1);
  const pixelColor = detectPixelColor.data;
  ravens.forEach((raven, index) => {
    const haveHitbox = raven.checkHitbox(pixelColor);
    if (haveHitbox) {
      raven.markForDeletion = true; // Mark the raven for deletion
      score++;
      ravens.splice(index, 1); // Remove the raven from the array
      explosions.push(new Explosion(raven.x, raven.y, raven.width));
    }
  });
});

function animate(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  collisionCtx.clearRect(0, 0, collisionCanvas.width, collisionCanvas.height);
  let deltaTime = timestamp - lastTime; // time between 2 frames => depends on computer performance
  lastTime = timestamp;
  timeToNextRaven += deltaTime;

  // console.log("dt:", deltaTime, "ms");
  if (timeToNextRaven > ravenInterval) {
    ravens.push(new Raven(canvas.width, canvas.height));
    timeToNextRaven = 0;
    // small one draws first
    ravens.sort((a, b) => a.width - b.width);
  }
  drawScore(ctx);
  [...ravens, ...explosions].forEach((object, index) => {
    object.update(deltaTime);
    object.draw(ctx, collisionCtx);

    // Remove raven if it goes off the left edge
  });
  ravens = ravens.filter((raven) => !raven.markForDeletion);

  requestAnimationFrame(animate);
}

const timestamp = 0;
animate(timestamp);

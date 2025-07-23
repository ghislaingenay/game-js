import Raven from "./raven.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("gameCanvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let timeToNextRaven = 0;
let ravenInterval = 500; // 1 second interval for spawning ravens
let lastTime = 0;

let ravens = [];

function animate(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let deltaTime = timestamp - lastTime; // time between 2 frames => depends on computer performance
  lastTime = timestamp;
  timeToNextRaven += deltaTime;
  // console.log("dt:", deltaTime, "ms");
  if (timeToNextRaven > ravenInterval) {
    ravens.push(new Raven(canvas.width, canvas.height));
    timeToNextRaven = 0;
  }

  [...ravens].forEach((raven, index) => {
    raven.update();
    raven.draw(ctx);
    // Remove raven if it goes off the left edge
  });
  ravens = ravens.filter((raven) => !raven.markForDeletion);

  requestAnimationFrame(animate);
}

const timestamp = 0;
animate(timestamp);

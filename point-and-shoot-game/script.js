import Raven from "./raven.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("gameCanvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ravens = [];

const raven = new Raven(canvas.width, canvas.height);

function animate(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  raven.update();
  raven.draw(ctx);

  requestAnimationFrame(animate);
}

const timestamp = 1000;
animate(timestamp);

import Explosion from "./explosion.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const canvasPosition = canvas.getBoundingClientRect();

canvas.width = 500;
canvas.height = 700;

const explosions = [];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  explosions.forEach((explosion, index) => {
    explosion.update();
    explosion.draw(ctx);
    if (explosion.isAnimationComplete) {
      explosions.splice(index, 1); // Remove explosion from array
    }
  });

  requestAnimationFrame(animate);
}

animate();

function createAnimation(e) {
  const x = e.x - canvasPosition.left;
  const y = e.y - canvasPosition.top;
  explosions.push(new Explosion(x, y));
}

window.addEventListener("click", createAnimation);
// window.addEventListener("mousemove", createAnimation);

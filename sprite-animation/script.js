import { animationStates } from "./animation_constants.js";

let playerState = "dizzy"; // change this to test different animations

// ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
// sx, sy, sWidth, sHeight are the source rectangle from the image
// dx, dy, dWidth, dHeight are the destination rectangle on the canvas
// here we draw the entire image on the canvas
// so we use 0, 0 for sx, sy and CANVAS_HEIGHT for sWidth, sHeight
// and 0, 0 for dx, dy and CANVAS_HEIGHT for dWidth, dHeight
// this will stretch the image to fit the canvas

// sx, sy, sw, dh => element to crop out of the image
// d => when displaying the image, where to put it on the canvas

/** @type  {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600); // same in style.css
const CANVAS_HEIGHT = (canvas.height = 600);

const spriteWidth = 6876 / 12;
const spriteHeight = 5230 / 10;
const playerImage = new Image();
playerImage.src = "shadow_dog.png";

let gameFrame = 0;

const staggerFrames = 20; // how many frames to skip before showing the next frame

const spriteAnimations = new Map();

/** @type {HTMLSelectElement} */
const dropdown = document.getElementById("animationSelector");

dropdown.addEventListener("change", (event) => {
  const selectedState = event.target.value;
  if (animationStates.some((state) => state.name === selectedState)) {
    playerState = selectedState;
  } else {
    console.error(`State "${selectedState}" not found in animationStates.`);
  }
});

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations.set(state.name, frames);
});

function animate() {
  // clear the entire canvas
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimations.get(playerState).loc.length;
  let frameX = spriteWidth * position; // x position of the sprite in the sprite sheet
  let frameY = spriteAnimations.get(playerState).loc[position].y; // y position of the sprite in the sprite sheet
  ctx.drawImage(
    playerImage,
    frameX, // x position of the sprite in the sprite sheet
    frameY, // y position of the sprite in the sprite sheet
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  // if (gameFrame % staggerFrames === 0) {
  //   /** @type {number} */
  //   const frameXMax = frameXPerSprite[frameY.toString()] - 1;
  //   if (frameX < frameXMax) frameX++;
  //   else frameX = 0;
  // }
  gameFrame++;
  requestAnimationFrame(animate); // recursively call animate => animation loop
}

// if dont specify color, it will be black by default
animate();

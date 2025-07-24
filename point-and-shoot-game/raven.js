import Particle from "./particle.js";

export default class Raven {
  constructor(canvasWidth, canvasHeight) {
    this.spriteWidth = 271;
    this.spriteHeight = 194;
    this.sizeModifier = Math.random() * 0.6 + 0.4; // Random size modifier between 0.5 and 1

    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteHeight * this.sizeModifier;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = canvasWidth + this.width; // Start off the right edge
    this.y = Math.random() * (canvasHeight - this.height);
    this.directionX = -(Math.random() * 5 + 3); // Move left (negative direction)
    this.directionY = Math.random() * 5 - 2.5;
    this.markForDeletion = false;

    this.frame = 0;
    this.image = new Image();
    this.maxFrames = 5; // Assuming there are 5 frames in the sprite sheet
    this.image.src = "raven.png"; // Path to your raven image

    this.timeSinceFlap = 0;
    this.flapInterval = Math.random() * 100 + 50; // Time between flaps in milliseconds

    this.randomColors = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    this.color = `rgb(${this.randomColors[0]}, ${this.randomColors[1]}, ${this.randomColors[2]})`;
  }

  updateFrame() {
    this.frame = (this.frame + 1) % this.maxFrames; // Loop through frames
  }

  updateCanvasSize(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = canvasWidth + this.width; // Reset position when canvas size changes
    this.y = Math.random() * (canvasHeight - this.height);
  }

  checkHitbox(pixelColor) {
    const hasBeenHit = this.randomColors.every(
      (color, index) => color === pixelColor[index]
    );
    if (hasBeenHit) {
      this.markForDeletion = true;
      return true;
    }
    return false;
  }

  draw(ctx, collisionCtx) {
    collisionCtx.fillStyle = this.color;
    collisionCtx.fillRect(this.x, this.y, this.width, this.height); // Draw a rectangle for debugging
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    if (this.y + this.height > this.canvasHeight || this.y < 0) {
      this.directionY = -this.directionY; // Reverse direction if hitting top or bottom
    }
    this.x += this.directionX;
    this.y += this.directionY;
    if (this.x < -this.width) this.markForDeletion = true;
    // this.y += this.directionY;
    this.timeSinceFlap += deltaTime;
    if (this.timeSinceFlap > this.flapInterval) {
      this.updateFrame();
      this.timeSinceFlap = 0;
      const particle = new Particle(this.x, this.y, this.width, this.color);
      return particle; // Return the particle instance
    }

    // if (this.x < 0 - this.width) {
    //   this.x = this.canvasWidth + this.width; // Reset position when going off the left edge
    //   this.y = Math.random() * (this.canvasHeight - this.height); // Randomize vertical position
    // }

    // Reset raven when it goes off the left edge
    // if (this.x < -this.width) {
    //   this.x = this.canvasWidth + this.width;
    //   this.y = Math.random() * (this.canvasHeight - this.height);
    // }
  }
}

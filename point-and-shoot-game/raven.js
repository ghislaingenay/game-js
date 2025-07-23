export default class Raven {
  constructor(canvasWidth, canvasHeight) {
    this.width = 100;
    this.height = 50;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = canvasWidth + this.width; // Start off the right edge
    this.y = Math.random() * (canvasHeight - this.height);
    this.directionX = -(Math.random() * 5 + 3); // Move left (negative direction)
    this.directionY = Math.random() * 5 - 2.5;
    this.markForDeletion = false;

    this.frame = 0;
    this.image = new Image();
    this.image.src = "raven.png"; // Path to your raven image
    this.spriteWidth = 271;
    this.spriteHeight = 194;

    // this.speed = Math.random() * 2 + 1;
  }

  updateFrame() {
    this.frame = (this.frame + 1) % 5; // Loop through frames
  }

  draw(ctx) {
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

  update() {
    this.updateFrame();
    this.x += this.directionX;
    if (this.x < -this.width) this.markForDeletion = true;
    // this.y += this.directionY;

    // Reset raven when it goes off the left edge
    // if (this.x < -this.width) {
    //   this.x = this.canvasWidth + this.width;
    //   this.y = Math.random() * (this.canvasHeight - this.height);
    // }
  }
}

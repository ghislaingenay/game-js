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
    // this.speed = Math.random() * 2 + 1;
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.directionX;
    // this.y += this.directionY;

    // Reset raven when it goes off the left edge
    // if (this.x < -this.width) {
    //   this.x = this.canvasWidth + this.width;
    //   this.y = Math.random() * (this.canvasHeight - this.height);
    // }
  }
}

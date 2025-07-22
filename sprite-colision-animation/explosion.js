export default class Explosion {
  constructor(x, y) {
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = "boom.png"; // Ensure this path is correct
    this.frame = 0;
    this.timer = 0;
    this.isAnimationComplete = false;
    this.angle = Math.random() * 6.28; // Random angle for rotation
  }

  updateFrame() {
    if (this.frame > 5) {
      // send event to remove explosion
      // this.frame = 0;
      this.isAnimationComplete = true; // Mark animation as complete
    } else this.frame++;
  }

  update() {
    this.timer++;
    if (this.timer % 10 === 0) this.updateFrame();
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x - this.width / 2,
      this.height / 2,
      // this.x - this.width / 2,
      0 - this.width / 2,
      0 - this.height / 2,
      // this.y - this.height / 2,
      this.width,
      this.height
    );
    ctx.restore();
  }
}

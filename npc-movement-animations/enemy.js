const enemyImage = new Image();
enemyImage.src = "enemy1.png";
export default class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.speed = Math.random() * 4 - 2; // from -2 to 2
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.frame = 0;
  }

  updateFrame() {
    if (this.frame > 4) this.frame = 0;
    else this.frame++;
  }

  update(gameFrame) {
    this.x += this.speed;
    this.y += this.speed;
    if (gameFrame % 2 === 0) this.updateFrame();
  }

  draw(ctx) {
    ctx.drawImage(
      enemyImage,
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
}

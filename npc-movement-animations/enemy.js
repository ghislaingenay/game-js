const enemyImage = new Image();
enemyImage.src = "enemy1.png";
export class WiggleEnemy {
  constructor(x, y, url) {
    this.x = x;
    this.y = y;

    this.wiggle = 1005;

    this.image = new Image();
    this.image.src = "enemy1.png"; // Ensure the image is loaded

    this.speed = Math.random() * 4 - 2; // from -2 to 2
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (500 - this.width); // Random x position within canvas width
    this.y = Math.random() * (1000 - this.height); // Random y position within canvas height
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1); // Random speed between 1 and 3
  }

  updateFrame() {
    if (this.frame > 4) this.frame = 0;
    else this.frame++;
  }

  update(gameFrame) {
    this.x += Math.random() * this.wiggle - this.wiggle / 2; // Random horizontal movement
    this.y += Math.random() * this.wiggle - this.wiggle / 2; // Random vertical movement
    if (gameFrame % this.flapSpeed === 0) this.updateFrame();
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
}

export class MoveLeftEnemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.wiggle = 1005;

    this.image = new Image();
    this.image.src = "enemy2.png"; // Ensure the image is loaded

    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (500 - this.width); // Random x position within canvas width
    this.y = Math.random() * (1000 - this.height); // Random y position within canvas height
    this.frame = 0;
    this.angle = Math.random() * 2 * Math.PI; // Random angle for sine wave
    this.angleSpeed = Math.random() * 0.1 + 0.05; // Random speed for sine wave
    this.flapSpeed = Math.floor(Math.random() * 3 + 1); // Random speed between 1 and 3
    this.curve = Math.random() * 2 + 1; // Random curve for sine wave
  }

  updateFrame() {
    if (this.frame > 4) this.frame = 0;
    else this.frame++;
  }

  update(gameFrame) {
    this.x -= this.speed; // Random horizontal movement
    this.y += this.curve * Math.sin(this.angle) * 2; // Sine wave movement
    this.angle += this.angleSpeed; // Increment angle for sine wave
    if (this.x + this.width < 0) this.x = 500; // Reset position if off screen
    if (gameFrame % this.flapSpeed === 0)
      // this.y += Math.random() * this.wiggle - this.wiggle / 2; // Random vertical movement
      this.updateFrame();
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
}

export class ScaredEnemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.wiggle = 1005;

    this.image = new Image();
    this.image.src = "enemy3.png"; // Ensure the image is loaded

    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (500 - this.width); // Random x position within canvas width
    this.y = Math.random() * (1000 - this.height); // Random y position within canvas height
    this.frame = 0;
    this.angle = Math.random() * 2 * Math.PI; // Random angle for sine wave
    this.angleSpeed = Math.random() * 2 + 0.5; // Random speed for sine wave
    this.flapSpeed = Math.floor(Math.random() * 3 + 1); // Random speed between 1 and 3
    this.curve = Math.random() * 200 + 50; // Random curve for sine wave
  }

  updateFrame() {
    if (this.frame > 4) this.frame = 0;
    else this.frame++;
  }

  update(gameFrame) {
    this.x =
      this.curve * Math.sin((this.angle * Math.PI) / 180) +
      250 -
      this.width / 2;
    this.y =
      this.curve * Math.cos((this.angle * Math.PI) / 180) +
      500 -
      this.height / 2;
    this.angle += this.angleSpeed; // Increment angle for sine wave
    if (this.x + this.width < 0) this.x = 500; // Reset position if off screen
    if (gameFrame % this.flapSpeed === 0)
      // this.y += Math.random() * this.wiggle - this.wiggle / 2; // Random vertical movement
      this.updateFrame();
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
}

export class SoulEaterEnemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.image = new Image();
    this.image.src = "enemy4.png"; // Ensure the image is loaded

    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = this.generateXPos();
    this.newX = this.generateXPos();
    this.y = this.generateYPos();
    this.newY = this.generateYPos();
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1); // Random speed between 1 and 3
    this.angleSpeed = Math.random() * 2 + 0.5; // Random speed for sine wave
    this.interval = Math.floor(Math.random() * 200 + 50); // not be pickup if not round number
  }

  generateXPos() {
    return Math.random() * (500 - this.width);
  }

  generateYPos() {
    return Math.random() * (1000 - this.height);
  }

  updateFrame() {
    if (this.frame > 4) this.frame = 0;
    else this.frame++;
  }

  updatePosition() {
    this.newX = this.generateXPos();
    this.newY = this.generateYPos();
  }

  update(gameFrame) {
    if (gameFrame % this.interval === 0) {
      // this.y += Math.random() * this.wiggle - this.wiggle / 2; // Random vertical movement
      this.updatePosition();
    }
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;
    this.x -= dx * 0.02; // Move towards new X position
    this.y -= dy * 0.02; // Move towards new Y position
    if (gameFrame % this.flapSpeed === 0) {
      // this.y += Math.random() * this.wiggle - this.wiggle / 2; // Random vertical movement
      this.updateFrame();
    }
    if (this.x + this.width < 0) this.x = 500; // Reset position if off screen
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
}

export default class Particle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.radius = (Math.random() * size) / 0; // Random radius between 1 and size
    this.maxRadius = Math.random() * 20 + 35;
    this.markForDeletion = false;

    this.speedX = Math.random() * 1 + 0.5; // Random speed in x direction
  }

  update() {
    this.x -= this.speedX; // Move particle to the left
    this.y -= this.speedY; // Move particle upwards
    this.radius += 0.2; // Increase radius over time
    if (this.radius > this.maxRadius) this.markForDeletion = true;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

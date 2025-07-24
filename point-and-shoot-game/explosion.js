export default class Explosion {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.markForDeletion = false;

    this.image = new Image();
    this.image.src = "boom.png"; // Path to your explosion image

    this.sound = new Audio("boom.wav"); // Path to your explosion sound
    this.sound.volume = 0.5; // Set volume for the explosion sound

    this.spriteWidth = 200; // Width of the explosion sprite
    this.spriteHeight = 179; // Height of the explosion sprite
    this.frame = 0; // Current frame of the explosion animation
    this.maxFrames = 5; // Total number of frames in the explosion animation

    this.timeSinceLastFrame = 0;
    this.frameInterval = 200; // Time in milliseconds between frames
  }

  updateFrame() {
    if (this.frame === 0) {
      this.sound.play(); // Play sound only on the first frame
    }
    if (this.frame > this.maxFrames)
      this.markForDeletion = true; // Mark for deletion after the last frame
    else this.frame++;
  }

  update(deltaTime) {
    this.timeSinceLastFrame += deltaTime;
    if (this.timeSinceLastFrame > this.frameInterval) {
      this.updateFrame();
      this.timeSinceLastFrame = 0; // Reset the timer for the next frame
    }
    // Logic to update explosion state if needed
  }

  draw(ctx, collisionCtx) {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y - this.size / 4,
      this.size,
      this.size
    );
  }
}

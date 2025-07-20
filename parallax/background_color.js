/**
 * BackgroundLayer class for managing a parallax background layer in a game.
 * It handles the scrolling effect by moving two identical images across the canvas.
 * When one image moves off-screen, it is repositioned to create a continuous scrolling effect.
 * * @class
 * @param {HTMLImageElement} image - The image to be used for the background layer
 * @param {number} speedModifier - The speed modifier for the background layer
 * @param {number} gameSpeed - The overall game speed affecting the background layer's speed
 */
export default class BackgroundLayer {
  /** Constructor
   * @type  {HTMLImageElement} image - The image to be used for the background layer
   * @type {number} speedModifier - The speed modifier for the background layer
   */
  constructor(image, speedModifier, gameSpeed) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    // this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = this.speedModifier * gameSpeed;
  }

  update(gameSpeed) {
    this.speed = this.speedModifier * gameSpeed;
    const isFirstImgMoveOffScreen = this.x <= -this.width;
    if (isFirstImgMoveOffScreen) this.x = 0; // reposition first image
    // const isSecondImgMoveOffScreen = this.x2 <= -this.width;
    // if (isSecondImgMoveOffScreen) this.x2 = this.width + this.x - gameSpeed; // reposition second image
    this.x = Math.floor(this.x - this.speed); // Update the position of x by subtracting its speed, making it scroll left.
    // this.x2 = Math.floor(this.x2 - this.speed); // Update the position of x2 similarly.
  }

  /** Draw the background layer on the canvas
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw the layer
   */
  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

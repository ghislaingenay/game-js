const detectCollisionsBetweenRectangle = (rect1, rect2) => {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
};

// RECTANGLES
let rect1 = {
  x: 5,
  y: 5,
  width: 50,
  height: 50,
};

let rect2 = {
  x: 20,
  y: 20,
  width: 10,
  height: 10,
};

//  axis-aligned bounding box (AABB) collision
const haveCollision =
  rect1.x < rect2.x + rect2.width &&
  rect1.x + rect1.width > rect2.x &&
  rect1.y < rect2.y + rect2.height &&
  rect1.y + rect1.height > rect2.y;

const haveNoCollision =
  rect1.x > rect2.x + rect2.width ||
  rect1.x + rect1.width < rect2.x ||
  rect1.y > rect2.y + rect2.height ||
  rect1.y + rect1.height < rect2.y;

// CIRCLES
const circle1 = {
  x: 10,
  y: 10,
  radius: 300,
};

const circDx = circl2.x - circle1.x;
const circDy = circl2.y - circle1.y;
const distance = Math.sqrt(circDx * circDx + circDy * circDy);
const collision = distance < circle1.radius + circle2.radius;

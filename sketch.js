
let squareSize = 50;

function setup() {
  canvas = createCanvas(squareSize * 12, squareSize * 12);
  noFill();
}

function draw() {
  background(255);
  // more for clarity of code than a functional definition

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {

      let offset;
      if (x == 0) {
        offset = squareSize + map(random(1), 0, 1, -x * 5/3, x * 5/3);
      }
      else {
        offset = squareSize + map(random(x), 0, x, -x * 5/3, x * 5/3);
      }

      push();

      // random rotation, in either direction
      degrees = random(x / 30);
      if (random(1) > .5) {
        degrees = -degrees;
      }

      // use the x & y value to calculate where to draw on the canvas
      nX = x * squareSize + offset;
      nY = y * squareSize + offset;
      console.log(nX, nY);
      translate(nX, nY);

      rotate(degrees);

      square(0, 0, squareSize);

      pop();
    }
  }
  noLoop();
}
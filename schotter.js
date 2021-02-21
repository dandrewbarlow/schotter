
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

      // check prevents a NaN when x == 0
      if (x == 0) {
        offset = squareSize + map(random(1), 0, 1, -x * 5/3, x * 5/3);
      }
      else {
        offset = squareSize + map(random(x), 0, x, -x * 5/3, x * 5/3);
      }

      push();

      // random rotation, in either direction
      degrees = random(x / 15);
      if (random(1) > .5) {
        degrees = -degrees;
      }

      // use the x & y value to calculate where to draw on the canvas
      nX = x * squareSize + offset;
      nY = y * squareSize + offset;

      translate(nX, nY);

      rotate(degrees);

      square(0, 0, squareSize);

      pop();
    }
  }
  noLoop();
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    draw();
  }
}
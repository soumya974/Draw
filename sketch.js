function setup() {
  createCanvas(1500,1500);
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(1);
    stroke("red")
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function setup() {
  createCanvas(500, 500);
	colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  gradient(-15, 0, 15, 0);
  scale(map(mouseX, 0, width, 5, 30));
  shark();
  shark(0.9);
  shark(0.8);
  shark(0.7);
  shark(0.6);
  fill(255);
  textSize(1);
  text('教育科技學系', -3, 1.5);
}

function gradient(x1, y1, x2, y2) {
  const g = drawingContext.createLinearGradient(x1, y1, x2, y2);
  g.addColorStop(0, color(0, 60, 100));
	g.addColorStop(1, color(180, 40, 80));
  drawingContext.strokeStyle = g;
  drawingContext.fillStyle = g;
}

function shark(i = 1) {
  push();
  strokeWeight(0.2 / i);
  scale(i);
  line(12, 2, 5, 5);
  line(5, 5, 2, 5);
  line(2, 5, -3, 7);
  line(-3, 7, -1, 4.5);
  line(-1, 4.5, -6, 4);
  line(-6, 4, -11, -1);
  line(-11, -1, -7, -5);
  line(-7, -5, -1, -7);
  line(-1, -7, 3, -8);
  line(3, -8, 5, -11);
  line(5, -11, 4, -7);
  line(4, -7, 6, -5);
  line(6, -5, 3, -6);
  line(3, -6, 2, -6);
  line(2, -6, -1, -5);
  line(-1, -5, -6, -2);
  line(-6, -2, 0, -1);
  line(0, -1, -1, -3);
  line(-1, -3, 2, -2);
  line(2, -2, 3, -1);
  line(3, -1, 5, -1);
  line(5, -1, 4, 0);
  line(4, 0, 8, 0);
  line(8, 0, 9, 1);
  line(9, 1, 12, 2);
  circle(7.5, 3, 0.3);
  pop();
}
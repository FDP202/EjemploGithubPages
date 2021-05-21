function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(80);
  fill(255,0,0);
  ellipse(50,50,50,50);

  fill(255,255,0);
  ellipse(50,150,50,50);

  fill(0,255,0);
  ellipse(150,150,50,50);

  fill(0,255,0);
  ellipse(200,200,50,50);

  rectMode(CENTER);
  fill(0,0,255);
  rect(width/2, height/2, 50, 50);
}


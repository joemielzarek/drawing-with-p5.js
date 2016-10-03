function setup() {
  createCanvas(770, 500);
  background(255);
  noStroke();
}

function draw() {
  background(255);
  from = color(255, 200, 0, 0.2 * 255);
  to = color(0, 200, 255, 0.2 * 255);
  c0 = lerpColor(from, to, .15);
  c1 = lerpColor(from, to, .30);
  c2 = lerpColor(from, to, .45);
  c3 = lerpColor(from, to, .60);
  c4 = lerpColor(from, to, .75);
  c5 = lerpColor(from, to, .90);
  for (var i = 0; i < 100; i++) {
    fill(from);
    quad(random(-50, 50), random(height),
         random(-50, 50), random(height),
         random(-50, 50), random(height),
        random(-50, 50), random(height));
    fill(c0);
    quad(random(50, 100), random(height),
         random(50, 100), random(height),
         random(50, 100), random(height),
        random(50, 100), random(height));
    fill(c1);
    quad(random(100, 150), random(height),
         random(100, 150), random(height),
         random(100, 150), random(height),
         random(100, 150), random(height));
    fill(c2);
    quad(random(150, 200), random(height),
         random(150, 200), random(height),
         random(150, 200), random(height),
         random(150, 200), random(height));
     fill(c3);
     quad(random(200, 250), random(height),
          random(200, 250), random(height),
          random(200, 250), random(height),
          random(200, 250), random(height));
    fill(c4);
    quad(random(250, 300), random(height),
         random(250, 300), random(height),
         random(250, 300), random(height),
         random(250, 300), random(height));
     fill(c5);
     quad(random(300, 350), random(height),
          random(300, 350), random(height),
          random(300, 350), random(height),
          random(300, 350), random(height));
    fill(to);
    quad(random(350, 760), random(height),
         random(350, 760), random(height),
         random(350, 760), random(height),
         random(350, 760), random(height));
  }
  frameRate(30);
}

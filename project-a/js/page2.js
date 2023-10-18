let x, y;

function setup() {
    createCanvas(600, 800);
    background(0);
    x = 30;
    y = 30;
    xSpeed = 3;
    ySpeed = 3;
}

function draw() {
    y = y + 1;

    let freq = frameCount * 0.06;
    let cosValue = cos(freq);
    let dia = map(cosValue, -1, 1, 50, 150);

    noFill();
    strokeWeight(3);
    stroke(random(0), random(250), random(11));
    circle(x, y, dia);

    x = x + xSpeed;
    y = y + ySpeed;

    if (x < 0 || x > width) {
        xSpeed = xSpeed * -1;
    }
    if (y < 0 || y > height) {
        ySpeed = ySpeed * -1;
    }
    fill("red");
    circle(x, y, 30);
}
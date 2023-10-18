let x = 0;
let y = 0;
let size = 85;
let angle = 0;

function setup() {
    canvas = createCanvas(600, 800);
    background(137, 207, 255);
    frameRate(10);
    angleMode(DEGREES);
}

function draw() {
    x += 0.5;
    size += 0.05;
    angle += 30 + 1.2;

    translate(width / 2, height / 2);
    rotate(angle);
    noFill();
    stroke(180, 10, 220, 50);
    circle(x, y, size);

}

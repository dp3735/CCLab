var dia = 0;
var growspeed = 3;
var cdia = 20;
var circleRed = 0;
var redIncrease = 10;
var bcdia = 1;
var bgrowspeed = 1;

function setup() {
    frameRate(10);
    createCanvas(800, 800);
    background(0);
}

function draw() {
    let r = random(255);
    let g = random(25);
    let b = random(25);
    let x = random(0, width);
    let y = random(0, height);
    fill(r, g, b);
    rect(0, 0, 800, 800);

    fill(255);
    circle(x, y, cdia);

    cdia = cdia + growspeed;
    if (cdia > 250 || cdia < 1) {
        growspeed = -growspeed;
    }

    circleRed = circleRed + redIncrease;
    if (circleRed > 250 || circleRed < 0) {
        redIncrease = -redIncrease;
    }

    bgrowspeed = -bgrowspeed;
    bcdia = bcdia + bgrowspeed;

    fill("black");
    circle(mouseX, mouseY, cdia);
}

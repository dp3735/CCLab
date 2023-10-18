var t = 200;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0, 5);

    fill(255);
    flower(width / 2 - 100, height / 2, 30, 0.01);
    flower(width / 2 + 100, height / 2, 30, 0.01);

    var x = width * noise(t + 10);
    var y = height * noise(t + 30);
    var r = 255 * noise(t + 50);
    var g = 255 * noise(t + 20);
    var b = 255 * noise(t + 40);

    noStroke();
    fill(r, g, b);
    ellipse(x, y, 60, 70);
    t = t + 0.1;
}

function flower(x, y, size, speed) {
    for (let i = 0; i <= width; i++) {
        translate(x, y);
        rotate(frameCount * speed);
        rotate(radians(2 * i));
        noStroke();
        ellipse(0, 0, size, size * 0.07);
    }
}
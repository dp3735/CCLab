let brain;
let paintbrush;

function setup() {
    let canvas = createCanvas(600, 800);
    canvas.parent("canvas-container");
    background(0);
    brain = new Mybrain(width / 2, height / 2);
    paintbrush = new Paintbrush(255, 100, 120, 10);
}

function draw() {
    brain.update();
    brain.display();
    paintbrush.update();
}

function keyPressed() {
    if (key === 'e') {
        paintbrush.changeColor(0, 0, 0);
    }
}

class Mybrain {
    constructor(startX, startY) {
        this.t = 0;
        this.x = startX;
        this.y = startY;
        this.r = 0;
        this.b = 0;
        this.g = 0;
    }

    update() {
        this.x = width / 2 + map(noise(this.t), 0, 1, -135, 135);
        this.y = height / 2 + map(noise(this.t + 5), 0, 1, -120, 120);
        this.t += 0.02;

        this.r = this.r + 2;
        if (this.r > 255) {
            this.r = 0;
        }

        this.g = this.g + 1;
        if (this.g > 255) {
            this.g = 0;
        }

        this.b = this.b + 0.5;
        if (this.b > 255) {
            this.b = 0;
        }
    }

    display() {
        push();
        translate(this.x, this.y);
        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(-100, -60, 40, 40);
        pop();
    }
}

class Paintbrush {
    constructor(firstRed, firstGreen, firstBlue, firstThick) {
        this.g = firstGreen;
        this.b = firstBlue;
        this.r = firstRed;
        this.thickness = firstThick;
    }

    update() {
        if (keyIsPressed && key === 'e') {
            stroke(0);
            strokeWeight(this.thickness);
            line(pmouseX, pmouseY, mouseX, mouseY);
        } else if (mouseIsPressed) {
            stroke(255);
            strokeWeight(this.thickness);
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    }

    changeColor(otherRed, otherGreen, otherBlue) {
        this.r = otherRed;
        this.g = otherGreen;
        this.b = otherBlue;
    }
}
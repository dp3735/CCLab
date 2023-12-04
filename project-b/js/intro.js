let particles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(255);
    particles.push(new Particle(width / 2, height / 2, random(5, 15)));
    particles.push(new Particle(width / 2, height / 2, random(5, 20)));
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.move();
        p.display();
        p.sparkle();
    }

    while (particles.length > 400) {
        particles.splice(0, 1);
    }
}

class Particle {
    constructor(startX, startY, startDia) {
        this.x = startX;
        this.y = startY;
        this.xSpeed = random(-3, 3);
        this.ySpeed = random(-3, 3);
        this.dia = startDia;
        this.r = 228;
        this.g = 16;
        this.b = 66;
        this.a = 3;
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    display() {
        push();
        noStroke();
        fill(this.r, this.g, this.b, this.a);
        circle(this.x, this.y, this.dia);
        pop();
    }

    sparkle() {
        let glow = sin(frameCount * random(0.001, 0.01)) * random(0, 400);
        constrain(glow, 0, 50);
        this.a = glow;
    }
}
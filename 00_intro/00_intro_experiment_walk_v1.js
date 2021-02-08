let w = 800;
let h = 800;

let x = w / 4;
let y = h / 4;

// for random walk 1
let x1 = x;
let y1 = y;

// for random walk 2
let x2 = x;
let y2 = y;

let sky;
let canvas;

let font;

let posx = 10;
let posy = 10;
let rtext;

let status = 1;


function preload() {
    font = loadFont('fonts/Lato-Light.ttf');
}

function setup() {

    canvas = createCanvas(w, h);
    ellipseMode(RADIUS);




}

function draw() {

    fill(0, 10);
    sky = rect(0, 0, 800, y);

    // timing


    let r1 = random(1);
    let r2 = random(1);

    // for water gradients
    let colorchange = randomGaussian(100, 50);

    // for rays
    let alpha = randomGaussian(255);

    strokeWeight(1);

    // random walk 1
    fill(221, 235, 237);
    stroke(33, 169, 184, 50);
    curve(x1 - 50, y1, x1, y1, x1 + 30, y1 + 30, x1 + 50, y1 + 10);
    stroke(33, 169, 184);
    point(x1, y);

    // wave fill 1
    stroke(240, colorchange, 140, 100);
    noFill();
    line(x1, y1, x1 + 100, h / 4);

    // random walk 2
    fill(221, 235, 237);
    stroke(0, 160, 240, 50);
    curve(x2 - 50, y2, x2, y2, x2 + 30, y2 + 30, x2 + 50, y2 + 10);
    stroke(0, 160, 240);
    point(x2, y2);

    // wave fill 2
    stroke(20, colorchange, 150, 60);
    noFill();
    line(x2 + 30, y2 + 20, x2 + x1, h / 4)

    // random walk 1 rules 
    if (r1 < 0.3) {
        x1 += 2.5;

    } else if (r1 < 0.5) {
        x1 -= 2;

    } else if (r1 < 0.8) {
        y1++;

    } else {
        y1--;

    }

    // random walk 2 rules 
    if (r2 < 0.3) {

        x2 += 3;
    } else if (r2 < 0.5) {

        x2 -= 2;
    } else if (r2 < 0.8) {

        y2 += 1.4;
    } else {

        y2--;
    }

    // sun outside ring
    // noStroke();
    strokeWeight(0.5);
    stroke(0);
    fill(255);
    ellipse(x, y, 70);



    // sun inside ring 
    fill(255);
    stroke(0, 50);
    ellipse(x, y, 40);


    // sun rays



    // strokeWeight(.01);
    // //stroke(0, alpha);
    // stroke(255);
    // for (i = 0; i < 11; i++) { // x - (200) = 0 > 0,0

    //     line(x, y, x - (i * 20), 0);
    // }

    // for (i = 0; i < 11; i++) { // x - (200) = 0 > 0,0

    //     line(x, y, 0, y - (i * 20));
    // }

    // text

    rtext = random(1);

    textFont(font);
    noStroke();
    fill(255, 200);
    textSize(12);


    text("ONE OF THE BASIC situationist practices is the dérive [literally: “drifting”], a", posx, posy, w, 40);
    text("a technique of rapid passage through varied ambiances.", posx - 3000, posy + 20, w, 20)
    text('one or more persons during a certain period drop their relations, their work and leisure activities', posx - 2000, posy + 40, w, 40)
    text('let themselves be drawn by the attractions of the terrain and the encounters they find there', posx, posy + 80, w, 20)
    text('cities have psychogeographical contours, with constant currents, fixed points and vortexes', posx - 1500, posy + 100, w, 20)
    text('chance is a less important factor in this activity than one might think', posx - 4000, posy + 140, w, 20)
        // stops when mouse on sky

    startMotion();
    canvas.mouseOver(changeStatus);
    canvas.mouseOut(changeStatus);
    //print(status);


}

function changeStatus() {
    if (status === 1) {
        status = 0;
    } else if (status === 0) {
        status = 1;
        startMotion();

    }
}

function pauseMotion() {
    // do nothing
    status = 0
}

function startMotion() {
    if (status === 1) {
        if (rtext < 0.6) {
            posx -= 0.5;
        } else {
            posx += 2;
        }
    }

}
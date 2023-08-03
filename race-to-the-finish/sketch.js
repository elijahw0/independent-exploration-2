let redXPos = 25;
let redYPos = 100;
let blueXPos = 25;
let blueYPos = 200;
let redScore = 0;
let blueScore = 0;

function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
    strokeWeight(3);
    textSize(60); 
}

function draw() {
    background(0, 200, 0);

    // move both balls random distances
    redXPos += random(0, 5); 
    redYPos += random(-0.5, 0.5);
    blueXPos += random(0, 5); 
    blueYPos += random(-0.5, 0.5);

    // show scores
    fill(255, 0, 0);
    text(redScore, 700, 100);
    fill(0, 0, 255);
    text(blueScore, 700, 225);

    // show finish line
    stroke(0); 
    line(600, 0, 600, 300);

    // red ball
    fill(255, 0, 0);
    noStroke(); 
    ellipse(redXPos, redYPos, 50, 50); 

    // blue ball
    fill(0, 0, 255);
    ellipse(blueXPos, blueYPos, 50, 50); 

    // crossed finish line
    if (redXPos > 600 || blueXPos > 600) {
        if (redXPos > blueXPos) {
            // blue wins
            blueScore++;
        } else if (blueXPos > redXPos) {
            // red wins
            redScore++;
        }
        // reset positions
        redXPos = 25;
        redYPos = 100;
        blueXPos = 25;
        blueYPos = 200;
    }
}

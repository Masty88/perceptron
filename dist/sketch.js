// A Perceptron object
let ptron;

let points =new Array(200)
let trainingIndex=0


// Coordinate space
let xmin = -1;
let ymin = -1;
let xmax = 1;
let ymax = 1;

// The function to describe a line
function f(x) {
    let y = 0.3 * x + 0.4;
    return y;
}

function setup(){
    createCanvas(800,800)
    // The perceptron has 3 inputs -- x, y, and bias
    // Second value is "Learning Constant"
    this.ptron = new Perceptron(2,0.1); // Learning Constant is low just b/c it's fun to watch, this is not necessarily optimal
    for(let i = 0; i < points.length ;i++){
        points[i] = new Point(random(width), random(height));
    }

}

function draw() {
    background(255);
    for(let i=0; i<points.length;i++){
        // this.ptron.train([points[i].x,points[i].y], points[i].label)
        let guess= this.ptron.feedforward([points[i].x,points[i].y])
        // console.log("guess",guess)
        // console.log("label",points[i].label)
        if(guess == points[i].label){
         fill(0,255,0);
        }else{
            fill(255,0,0);
        }
        noStroke();
        ellipse(points[i].x,points[i].y,8,8)
    }
    let pointTraining = points[trainingIndex]
    this.ptron.train([pointTraining.x,pointTraining.y], pointTraining.label)
    trainingIndex++;
    if(trainingIndex == points.length){
        trainingIndex = 0
    }


    // Draw the line
    strokeWeight(1);
    stroke(0);
    let x1 = 0
    let y1 = 0
    let x2 = width
    let y2 = height;
    line(x1, y1, x2, y2);

    // noLoop();

}



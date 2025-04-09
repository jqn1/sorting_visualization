const FRAMERATE = 1;
const WIDTH = 800;
const HEIGHT = 800;


function setup() {
    createCanvas(WIDTH, HEIGHT);
    frameRate(FRAMERATE);
    array = randomArray(20);
}
  
function draw() {
    background(0, 0, 0);
    drawArray(array,WIDTH,HEIGHT);
    fill(0,0,0);
}

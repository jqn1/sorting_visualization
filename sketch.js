const FRAMERATE = 60;
const WIDTH = 800;
const HEIGHT = 800;
let array_size = 50;
let index = 0;


function setup() {
    createCanvas(WIDTH, HEIGHT);
    frameRate(FRAMERATE);
    array = randomArray(array_size);
    state_array = new Array(array_size).fill(0);
    last = array.length - 1;
}
  
function draw() {
    background(0, 0, 0);
    index = bubbleSort(array,state_array,index);
    drawArray(array,WIDTH,HEIGHT);
}

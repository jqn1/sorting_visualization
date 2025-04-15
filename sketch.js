const WIDTH = 800;
const HEIGHT = 800;
let array_size = 100;


let array = randomArray(array_size);
const canvas = document.getElementById("sketch");
canvas.width = WIDTH;
canvas.height = HEIGHT;

const ctx = canvas.getContext("2d");



bubbleSort(array,WIDTH,HEIGHT,ctx);
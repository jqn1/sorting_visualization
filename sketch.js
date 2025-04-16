const WIDTH = 800;
const HEIGHT = 800;
const DELAY = 0.2;
let array_size = 100;
let array1 = randomArray(array_size);
let state_array1 = new Array(array_size).fill(0);
let array2 = randomArray(array_size);
let state_array2 = new Array(array_size).fill(0);
let start = 1;


canvas1 = startCanvas("canvas_container")
canvas2 = startCanvas("canvas_container")

drawArray(array1,state_array1,WIDTH,HEIGHT,canvas1);
drawArray(array2,state_array2,WIDTH,HEIGHT,canvas2);

if (start == 1) {
selectionSort(array1,WIDTH,HEIGHT,canvas1);
selectionSort(array2,WIDTH,HEIGHT,canvas2);
}
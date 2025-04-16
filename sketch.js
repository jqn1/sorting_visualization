const WIDTH = 700;
const HEIGHT = 700;
const DELAY = 1;
const function_names = ["bubbleSort","selectionSort"];
const functions = [bubbleSort,selectionSort,bogoSortStep];
const menus_selection = [bubbleSort,bubbleSort];
const start = document.getElementById("start_button");
const array_size = 5;


let test = randomArray(array_size);
quickSort(test,0,test.length-1);

let state_array1 = new Array(array_size).fill(0);
let state_array2 = new Array(array_size).fill(0);

let array1 = randomArray(array_size);
let array2 = randomArray(array_size);
arrays = [array1,array2];

const reset = document.getElementById("reset_button");
reset.onclick = (() => {
location.reload();
})

canvas1 = startCanvas("canvas_container",function_names,functions,menus_selection,0);
canvas2 = startCanvas("canvas_container",function_names,functions,menus_selection,1);
canvases = [canvas1,canvas2];

drawArray(array1,state_array1,WIDTH,HEIGHT,canvas1);
drawArray(array2,state_array1,WIDTH,HEIGHT,canvas2);



start.onclick = () => {
    for (let i = 0; i < menus_selection.length; i++){
        menus_selection[i](arrays[i],WIDTH,HEIGHT,canvases[i]);
    }

}


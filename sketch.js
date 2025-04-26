const WIDTH = 700;
const HEIGHT = 700;
let DELAY = 1;
const function_names = ["bubbleSort","selectionSort","quickSort","bogoSort","insertionSort"];
const functions = [bubbleSort,selectionSort,quickSort,bogoSort,insertionSort];
const menus_selection = [bubbleSort,bubbleSort];
const start = document.getElementById("start_button");
let array_size;
if (sessionStorage.getItem("array_size") !=  undefined) {
    array_size = parseInt(sessionStorage.getItem("array_size"));
}else {
    array_size = 125;
}



let state_array1 = new Array(array_size).fill(0);
let state_array2 = new Array(array_size).fill(0);

let array1 = randomArray(array_size);
let array2 = [...array1];
arrays = [array1,array2];


let canvas1 = startCanvas("canvas_container",function_names,functions,menus_selection,0);
let canvas2 = startCanvas("canvas_container",function_names,functions,menus_selection,1);
let canvases = [canvas1,canvas2];

drawArray(array1,state_array1,WIDTH,HEIGHT,canvas1);
drawArray(array2,state_array2,WIDTH,HEIGHT,canvas2);



start.onclick = () => {
    for (let i = 0; i < menus_selection.length; i++){
        menus_selection[i](arrays[i],canvases[i],0,arrays[i].length-1,new Array(arrays[i].length).fill(0));
        
    }

}


const reset_button = document.getElementById("reset_button");
reset_button.onclick = (() => {
    sessionStorage.setItem("array_size",slider.value);
    location.reload();

})
const FRAMERATE = 1000;
const WIDTH = 800;
const HEIGHT = 800;
let array_size = 6;
let selected_function;
let start = 0;
let index;

let algorithms_array = [bubbleSort,bogoSort];
let algorithms_names = ["bubbleSort","bogoSort"];


let selection_menu = document.getElementById("algorithms");

selection_menu.onchange = () => {
    start = 0;
    reboot();
}


let start_button = document.getElementById("start_button");
start_button.onclick = () =>{
    let selection = selection_menu.value;
    // select function
    for(let i =0; i < algorithms_names.length; i++){ 
        if(selection == algorithms_names[i]){
            selected_function = algorithms_array[i];
        }
    }
    if(start == 0){
        start = 1;
    }
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    frameRate(FRAMERATE);
    array = randomArray(array_size);
    state_array = new Array(array_size).fill(0);
    last = array.length - 1;
    index = 0;
}

function reboot(){
    array = randomArray(array_size);
    state_array = new Array(array_size).fill(0);
    last = array.length - 1;
    index = 0;

}


  
function draw() {
    background(0, 0, 0);
    if(start == 1){
        index = selected_function(array,state_array,index);
    }
    drawArray(array,WIDTH,HEIGHT);
}

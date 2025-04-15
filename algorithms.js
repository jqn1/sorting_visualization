
async function bubbleSort(array,canvas_width,canvas_height,ctx){
    let last;
    let state_array = new Array(array_size).fill(0);
    for (let i = 0; i < array_size - 1; i++) {
        for (let j = 0; j < array_size - (i+1) ; j++) {
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            
            state_array[j] = 1;
            state_array[j+1] = 1;
            drawArray(array,state_array,canvas_width,canvas_height,ctx);
            await delay(0.5);
            if (array[j] > array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            } 
            last = array_size - (i+1);

        }
        state_array[last] = 2;
    }
}
function bogoSortStep(array, state_array,index){

    //shuffle elements until array is ordered
 
    //check if array is ordered, if it is, exit
    let is_ordered = 1;
    for (let i = 0; i < array.length - 1; i++){
        if( array[i] > array[i+1] ){
            is_ordered = 0;
            break;
        }

    }
    if (is_ordered == 1) {
        start = 0;
        return;
    }
    random_index1 = Math.floor(Math.random() * array.length);
    random_index2 = Math.floor(Math.random() * array.length);
    state_array[random_index1] = 1;
    state_array[random_index2] = 1;

    let temp = array[random_index1];
    array[random_index1] = array[random_index2];
    array[random_index2] = temp;

}

function selectionSortStep(array, state_array, index){
}

async function bubbleSort(array,canvas_width,canvas_height,ctx){
    let last;
    let state_array = new Array(array_size).fill(0);
    for (let i = 0; i < array_size - 1; i++) {
        for (let j = 0; j < array_size - (i+1) ; j++) {
            state_array[j] = 1;
            state_array[j+1] = 1;
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            drawArray(array,state_array,canvas_width,canvas_height,ctx);
            await delay(DELAY);
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
    random_index1 = Math.floor(Math.random() * array.length);
    random_index2 = Math.floor(Math.random() * array.length);
    state_array[random_index1] = 1;
    state_array[random_index2] = 1;

    let temp = array[random_index1];
    array[random_index1] = array[random_index2];
    array[random_index2] = temp;

}

async function selectionSort(array, canvas_width, canvas_height, ctx){
    let state_array = new Array(array_size).fill(0);

    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        let min_index = i;
        for (let j = i; j < array.length; j++) {
            state_array[j] = 1;
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            drawArray(array,state_array,canvas_width,canvas_height,ctx);
            await delay(DELAY);

            if (array[j] < min){
                min = array[j];
                min_index = j;
                console.log("new min ",min);
            }

        }
        //swap
        let temp = array[i];
        array[i] = min;
        array[min_index] = temp;

        state_array[i] = 2;
    }
    
}
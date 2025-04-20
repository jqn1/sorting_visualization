
async function bubbleSort(array,ctx,start,end,state_array){
    let last;
    for (let i = 0; i < array_size - 1; i++) {
        for (let j = 0; j < array_size - (i+1) ; j++) {
            state_array[j] = 1;
            state_array[j+1] = 1;
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            drawArray(array,state_array,WIDTH,HEIGHT,ctx);
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
    state_array[0] = 2;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawArray(array,state_array,WIDTH,HEIGHT,ctx);
    await delay(0);
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

async function selectionSort(array,ctx,start,end,state_array){
    

    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        let min_index = i;
        for (let j = i; j < array.length; j++) {
            state_array[j] = 1;
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            drawArray(array,state_array,WIDTH,HEIGHT,ctx);
            await delay(DELAY);

            if (array[j] < min){
                min = array[j];
                min_index = j;
            }

        }
        //swap
        let temp = array[i];
        array[i] = min;
        array[min_index] = temp;

        state_array[i] = 2;
    }
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawArray(array,state_array,WIDTH,HEIGHT,ctx);
    await delay(DELAY);
    
}

async function quickSort(array,ctx,start,end, state_array) {
    if (start < end) {
        let index = await quickSortPartition(array, start, end, state_array);
        await quickSort(array, ctx, start, index - 1,state_array);
        await quickSort(array, ctx, index + 1, end,state_array);
    }else {
        state_array[start] = 2;
    }
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawArray(array,state_array,WIDTH,HEIGHT,ctx);
    await delay(0);
}

async function quickSortPartition(array, start, end, state_array) {
    let last = array[end];
    let i = start - 1;
    for (j = start; j < end; j++) {
        state_array[end] = 1;
        state_array[j] = 1;
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        drawArray(array,state_array,WIDTH,HEIGHT,ctx);
        await delay(DELAY);
        if (array[j] <= last) {
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            state_array[i] = 1;
        }
    }
    let temp = array[i+1];
    array[i+1] = array[end];
    array[end] = temp;

    state_array[i+1] = 2;
    
    return i + 1;
}


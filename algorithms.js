
async function bubbleSort(array, ctx, start, end, state_array) {
    let last;
    for (let i = 0; i < array_size - 1; i++) {
        for (let j = 0; j < array_size - (i + 1); j++) {
            state_array[j] = 1;
            state_array[j + 1] = 1;
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            drawArray(array, state_array, WIDTH, HEIGHT, ctx);
            await delay(DELAY);
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            last = array_size - (i + 1);

        }
    }
    await completeSortAnimation(array,state_array,ctx);
}
async function bogoSort(array, ctx, start, end, state_array) {
    let is_ordered = 0;
    let ordered_elements;
    while (!is_ordered) {

        // shuffle the array
        for (let i = 0; i < array.length; i++) {
            // select a random element to shuffle with element i
            random_index = Math.floor(Math.random() * array.length);
            let temp = array[i];
            array[i] = array[random_index];
            array[random_index] = temp;

        }
        // check if array is sorted
        ordered_elements = 0;
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        drawArray(array, state_array, WIDTH, HEIGHT, ctx);
        await delay(DELAY);
        for (let i = 0; i < array.length - 1; i++) {


            if (array[i] > array[i + 1]) {
                break;
            }
            ordered_elements++;
        }

        console.log(ordered_elements, array_size - 1);
        if (ordered_elements == array_size - 1) {
            is_ordered = 1;
        }

    }
    await completeSortAnimation(array,state_array,ctx);
}

async function selectionSort(array, ctx, start, end, state_array) {
    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        let min_index = i;
        for (let j = i; j < array.length; j++) {
            state_array[j] = 1;
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            drawArray(array, state_array, WIDTH, HEIGHT, ctx);
            await delay(DELAY);

            if (array[j] < min) {
                min = array[j];
                min_index = j;
            }

        }
        //swap
        let temp = array[i];
        array[i] = min;
        array[min_index] = temp;

    }
    await completeSortAnimation(array,state_array,ctx);

}

async function quickSortStep(array, ctx, start, end, state_array) {
    if (start < end) {
        let index = await quickSortPartition(array, ctx, start, end, state_array);
        await quickSortStep(array, ctx, start, index - 1, state_array);
        await quickSortStep(array, ctx, index + 1, end, state_array);
    } else {
        //state_array[start] = 2;
        //ctx.clearRect(0, 0, WIDTH, HEIGHT);
        // drawArray(array, state_array, WIDTH, HEIGHT, ctx);
        // await delay(0);
    }
}

async function quickSortPartition(array, ctx, start, end, state_array) {
    let last = array[end];
    let i = start - 1;
    for (j = start; j < end; j++) {
        state_array[end] = 1;
        state_array[j] = 1;
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        drawArray(array, state_array, WIDTH, HEIGHT, ctx);
        await delay(DELAY);
        if (array[j] <= last) {
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            state_array[i] = 1;
        }
    }
    let temp = array[i + 1];
    array[i + 1] = array[end];
    array[end] = temp;

    //state_array[i + 1] = 2;

    return i + 1;
}

async function quickSort(array, ctx, start, end, state_array) {
    await quickSortStep(array,ctx,start,end,state_array);
    await completeSortAnimation(array,state_array,ctx);
}

async function insertionSort(array, ctx, start, end, state_array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key){
            state_array[i] = 1;
            state_array[j] = 1;
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            drawArray(array, state_array, WIDTH, HEIGHT, ctx);
            await delay(DELAY);
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    //color all array green
    await completeSortAnimation(array,state_array,ctx);

}

async function mergeSortStep(array, ctx, start, end, state_array) {
    if (start >= end) {
        return;
    }
    const mid = start + Math.floor((end - start) / 2);
    //console.log(mid);
    sorted_left = await mergeSortStep(array, ctx, start, mid, state_array);
    sorted_right = await mergeSortStep(array, ctx, mid + 1, end, state_array);
    console.log(start,mid,mid+1,end)

    await merge(array, ctx, start, mid, mid+1, end, state_array);
}

async function merge(array, ctx, start1, end1, start2, end2,state_array) {
    let i = start1;
    let j = start2;
    const sorted_array = new Array;
    console.log(i,"i")
    console.log(i,"j")
    while (i <= end1 && j <= end2){
        if (array[i] < array[j]) {
            state_array[i] = 1;
            state_array[j] = 1;
            sorted_array.push(array[i]);
            i++;
        } else {
            sorted_array.push(array[j]);
            j++;
        }
        console.log(sorted_array);
    }
    while (i <= end1) {
        sorted_array.push(array[i])
        i++;
    }
    while (j <= end2) {
        sorted_array.push(array[j])
        j++;
    }
    console.log(sorted_array);
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawArray(array, state_array, WIDTH, HEIGHT, ctx);
    await delay(20);
    array.splice(start1, (end2 - start1 + 1), ...sorted_array.slice(0))
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawArray(array, state_array, WIDTH, HEIGHT, ctx);
    await delay(20);
}

async function mergeSort(array, ctx, start, end, state_array) {
    await mergeSortStep(array,ctx,start,end,state_array);
    await completeSortAnimation(array,state_array,ctx);
}
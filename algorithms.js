function bubbleSort(array, state_array, index){
    if (last == 0){
        return array;
    }
    state_array[index] = 1;
    state_array[index+1] = 1;
    if (array[index] > array[index + 1]){
        let aux = array[index];
        array[index] = array[index + 1];
        array[index + 1] = aux;
    }
    if (index == last - 1){
        index = 0;
        last = last -1;
    }else{
        index++;
    }
    return index;


}
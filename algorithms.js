function bubbleSort(array, state_array, index){
    if (last == 0){
        start = 0;
        return ;

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

function bogoSort(array, state_array,index){

    //shuffle elements until array is ordered
 
    //check if array is ordered, if it is, exit
    let is_ordered = 1;
    for(let i = 0; i < array.length - 1; i++){
        if( array[i] > array[i+1] ){
            is_ordered = 0;
            break;
        }

    }
    if(is_ordered == 1){
        start = 0;
        return;
    }
    random_index1 = Math.floor(Math.random() * array.length);
    random_index2 = Math.floor(Math.random() * array.length);
    state_array[random_index1] = 1;
    state_array[random_index2] = 1;

    temp = array[random_index1];
    array[random_index1] = array[random_index2];
    array[random_index2] = temp;

}

function selectionSort(array, state_array, index){
    // if array is already sorted, exit
    if (index == array.length - 1){
        return;
    }
    // search for min unsorted value
    let min_value = Infinity;  
    let min_index;
    for(let i = index; i < array.length; i++){
        if (array[i] < min_value) {
            min_value = array[i];
            min_index = i;
        }
    }
    state_array[index] = 1;
    state_array[min_index] = 1;
    // swap min element with first unordered element
    temp = array[index];
    array[index] = array[min_index];
    array[min_index] = temp;
    index++;
    return index;
}

function bubbleSort(array){
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array.length - (i + 1); j++){
            //console.log("i = ",i,"j = ",j,"\n array: ",array);
            if (array[j] > array[j+1]){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
    console.log("sorted array: ",array);

    return array;
}
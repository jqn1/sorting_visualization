function bubbleSort(array){
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array.length - i; j++){
            console.log("i = ",i,"j = ",j,"\n array: ",array);
            if (array[j] > array[j+1]){
                let aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
    }
    console.log("sorted array: ",array);

    return array;
}
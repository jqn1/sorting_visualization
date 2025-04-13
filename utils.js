function drawArray(array, canvas_width, canvas_height){
    let rect_width = canvas_width / array.length;

    for (let i = 0; i < array.length; i++){
        let x = rect_width * i;
        let rect_heigth = (canvas_height) * array[i];
        if(state_array[i] == 1){
            fill(0, 255, 0);
        }else{
            fill(255, 255, 255);
        }
        rect(x,canvas_height, rect_width , -rect_heigth);
        state_array[i] = 0 ;
        
    }
}

function randomArray(size){
    const randomArray = [];

    for (let i = 1; i <= size; i++) {
        randomArray.push(i * 1 / size)
    }
    //shuffle the array 
    for(let i = 1; i <= size; i++){
        i1 = Math.floor(Math.random() * size);
        i2 = Math.floor(Math.random() * size);
        temp = randomArray[i1];
        randomArray[i1] = randomArray[i2];
        randomArray[i2] = temp;
    }

    return randomArray;
}
function drawArray(array, canvas_width, canvas_height){
    let rect_width = canvas_width / array.length;

    for (let i = 0; i < array.length; i++){
        let x = rect_width * i;
        let rect_heigth = (canvas_height) * array[i];
        fill(255, 255, 255);
        rect(x,canvas_height, rect_width , -rect_heigth);
        
    }

}

function randomArray(size){
    const randomArray = [];

    for (let i = 0; i < size; i++) {
        randomArray.push(Math.random());
    }

    return randomArray;
}
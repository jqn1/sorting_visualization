function drawArray(array,state_array, canvas_width, canvas_height,canvas_context){
    let rect_width = canvas_width / array.length;

    for (let i = 0; i < array.length; i++){
        let x = rect_width * i;
        let rect_heigth = (canvas_height) * array[i];
        if(state_array[i] == 1) {
            canvas_context.fillStyle = "red";
        } else if (state_array[i] == 2 ) {
            canvas_context.fillStyle = "limegreen";
        }else {
            canvas_context.fillStyle = "white"
        }
        canvas_context.strokeStyle = "black";
        
        canvas_context.fillRect(x,canvas_height,rect_width, -rect_heigth);
        canvas_context.strokeRect(x,canvas_height,rect_width, -rect_heigth);
        if (state_array[i] == 1) {
            state_array[i] = 0 ;
        }
        
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


function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startCanvas(container_id,function_names,functions,menus_selection,id){
    const div = document.getElementById(container_id);
    const canvas_div = document.createElement("div");
    canvas_div.id = id.toString();
    canvas_div.style = "display:flex;flex-direction:column";
    div.appendChild(canvas_div);
    const select = document.createElement("select");
    canvas_div.appendChild(select);
    function_names.forEach((name) => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
        
    })




    const canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style="background-color: black;"
    canvas_div.appendChild(canvas);
    const ctx = canvas.getContext("2d");


    select.onchange = (() => {
        console.log(select.value);
        for (let i = 0; i < function_names.length; i++){
            if (select.value == function_names[i]) {
                console.log(select.value);
                console.log(function_names[i]);
                menus_selection[id] = functions[i];
            }
        }
    })

    return ctx;
}


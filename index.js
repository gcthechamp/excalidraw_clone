const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

let isPencilClicked = false;

const pencil = document.getElementById("pencil");
pencil.addEventListener("click",togglePencil);

let drawingColor = "black";

const colorPicker = document.getElementById("color-picker");

colorPicker.addEventListener("change",() => 
                                {
                                 drawingColor = colorPicker.value;
                                } );


function togglePencil()
{
    if(isPencilClicked == false)
    {
        isPencilClicked = true;
        pencil.classList.add("pencil_active");
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown",onMouseDown);
    }
    else
    {
        isPencilClicked = false;
        pencil.classList.remove("pencil_active");
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown",onMouseDown);
    }
}

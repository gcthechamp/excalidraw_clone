let prev = null;

function onMouseDown(e)
{
    prev = {x : e.clientX, y : e.clientY};
    console.log("mouse down",prev.x,prev.y);
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mouseup",onMouseUp);
}

function onMouseMove(e)
{
    let curr = {x : e.clientX, y : e.clientY};
    console.log("mouse move",curr.x,curr.y);
    c.beginPath();
    c.moveTo(prev.x,prev.y);
    c.strokeStyle = drawingColor;
    c.lineWidth = 4;
    c.lineTo(curr.x,curr.y);
    c.stroke();
    c.closePath();
    prev = curr;
}

function onMouseUp(e)
{
    canvas.removeEventListener("mousemove",onMouseMove);
}

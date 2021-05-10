var mouse_event="empty";
var lpx, lpy;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color=document.getElementById("color").value;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
     width_of_line=document.getElementById("width_of_line").value;
     radius=document.getElementById("radius").value;
    mouse_event="mousedown";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
     mouse_event = "mouseup";
     console.log("now_loaded")
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.linewidth=width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 20, 0, 2*Math.PI)
    ctx.stroke()
}

}
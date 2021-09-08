canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var lx,ly;
color="black";
widthofline=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouseevent="mouseDown"   
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseevent="mouseUP"   
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseevent="mouseleave"   
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
if(mouseevent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.moveTo(lx,ly);
    ctx.lineTo(x,y);
    ctx.stroke();
}
lx=x;
ly=y;
}
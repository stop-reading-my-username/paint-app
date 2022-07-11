var last_position_of_x, last_position_of_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
var width= screen.width;
var new_width= screen.width-70;
var new_height= screen.width-300;
if(width<992){
   document.getElementById("myCanvas").width=new_width;
   document.getElementById("myCanvas").height= new_height;
   document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
   last_position_of_x= e.touches[0].clientX-canvas.offsetLeft
   last_position_of_y=e.touches[0].clientY-canvas.offsetTop 
   color=document.getElementById("color-picker").value;
    width_of_line=document.getElementById("width-picker").value;
}
 canvas.addEventListener("touchmove", my_touchmove);
 function my_touchmove(e){
   cpx= e.touches[0].clientX-canvas.offsetLeft
   cpy=e.touches[0].clientY-canvas.offsetTop 
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=width_of_line;
      ctx.moveTo(last_position_of_x,last_position_of_y);
      ctx.lineTo(cpx,cpy);
      ctx.stroke();
   

   last_position_of_x=cpx
   last_position_of_y=cpy
 }
 function clear_area(){
   
   ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
 }
var mouseEvent = "empty"; 
var last_position_of_x, last_position_of_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color-picker").value;
    width_of_line=document.getElementById("width-picker").value;
    mouseEvent="mouseDown"
}
canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(e){
    mouseEvent="mouseLeave"
 }
 canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e){
    mouseEvent="mouseUP"
 }
 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e){
   cpx= e.clientX-canvas.offsetLeft
   cpy=e.clientY-canvas.offsetTop
   if (mouseEvent=="mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=width_of_line;
      ctx.moveTo(last_position_of_x,last_position_of_y);
      ctx.lineTo(cpx,cpy);
      ctx.stroke();
   }

   last_position_of_x=cpx
   last_position_of_y=cpy
 }

 
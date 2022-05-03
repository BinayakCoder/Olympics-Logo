var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "#0081c8";
ctx.lineWidth = 3;
ctx.arc(220 ,200 ,40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#fcb131";
ctx.lineWidth = 3;
ctx.arc(270 ,240 ,40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 3;
ctx.arc(320 ,200 ,40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#00a651";
ctx.lineWidth = 3;
ctx.arc(370 ,240 ,40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#ee334e";
ctx.lineWidth = 3;
ctx.arc(420 ,200 ,40 ,0 , 2 * Math.PI);
ctx.stroke();
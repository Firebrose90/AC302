console.log("test......abcd");

var c =document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.lineWidth = 4;
ctx.strokeStyle = "cyan";
ctx.beginPath();
ctx.moveTo(150,20);
ctx.lineTo(0,300);
ctx.lineTo(300,300);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill();

var c2 =document.getElementById("myCanvas2");
var c2tx = c2.getContext("2d");

c2tx.lineWidth = 4;
c2tx.strokeStyle = "red";
c2tx.beginPath();
c2tx.moveTo(0,0);
c2tx.lineTo(300,300);
c2tx.lineTo(300,0);
c2tx.lineTo(0,300);
c2tx.closePath();
c2tx.stroke();
c2tx.fillStyle = "red";
c2tx.fill();

var c3 =document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");

ctx3.arc(150,50,40,0,6.28);
ctx3.strokeStyle = "cyan";
ctx3.stroke();
ctx3.fillStyle = "cyan";
ctx3.fill();
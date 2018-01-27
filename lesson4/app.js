console.log("test......abcd");

var c =document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var graham = new Image();
graham.src = "graham.jpg";

graham.onload = function(){
    ctx.drawImage(graham, 50, 50, 200, 200);
}

var c2 =document.getElementById("myCanvas2");
var c2tx = c2.getContext("2d");

var download = new Image();
download.src = "download.jpg";

download.onload = function(){
    c2tx.drawImage(download, 50, 50, 200, 200);
}

var c3 = document.getElementById("myCanvas3");
var c3tx = c3.getContext("2d");

c3tx.fillStyle = "cyan";
c3tx.fillRect(0,0,800,350);
c3tx.fillStyle = "green";
c3tx.fillRect(0,350,800,150);
c3tx.arc(700,50,40,0,6.28);
c3tx.strokeStyle = "yellow";
c3tx.stroke();
c3tx.fillStyle = "yellow";
c3tx.fill();


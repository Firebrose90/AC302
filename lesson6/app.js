var c =document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 600;
var HEIGHT = 600;

var x = 300;
var y = 300;
var size = 50;

var speedX = 0;
var speedY = 0;

var itemX;
var itemY;
var itemSize = 50;

var score = 0;
var collision = false;

function drawWing(){
    var wing = new Image();
    wing.src = "wing.png";
    ctx.drawImage(wing, x, y, size, size);
}

function drawPlanet(){
    var planet = new Image();
    planet.src = "planet.png";
    ctx.drawImage(planet, itemX, itemY, itemSize, itemSize);
}

function clear(){
	ctx.clearRect(0,0, WIDTH, HEIGHT);
}

function init(){
    itemX = Math.floor(Math.random()*(WIDTH - itemSize));
    itemY = Math.floor(Math.random()*(HEIGHT - itemSize));

    window.onkeydown = keydownControl;

    return setInterval(draw, 10);
}

function keydownControl(e){
    if (e.keyCode == 37){
    	speedX = -4;
    	speedY = 0;
    }
    else if (e.keyCode == 39){
    	speedX = 4;
    	speedY = 0;
    }
    else if (e.keyCode == 38){
    	speedX = 0;
    	speedY = -4;
    }
    else if (e.keyCode == 40){
    	speedX = 0;
    	speedY = 4;
    }
}


function draw(){
    clear();
    drawWing();
    drawPlanet();

    x += speedX;
    y += speedY;

    if(x+speedX < 0 || x+speedX > WIDTH -size){
        speedX = -speedX;
    }
    if(y+speedY < 0 || y+speedY > HEIGHT -size){
        speedY = -speedY;
    }

    //is there collision?
    collisionCheck();
    collisionHandle();
}

function collisionCheck(){
    if( (x+size >= itemX) && (x <= itemX + itemSize) && 
        (y+size >= itemY) && (y <= itemY + itemSize)) {
            collision = true;
    } else {
        collision = false;
    }
}

function collisionHandle(){
    if(collision){
        itemX = Math.floor(Math.random()* (WIDTH - itemSize) );
        itemY = Math.floor(Math.random()* (HEIGHT - itemSize) );

        score += 1;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}

init();
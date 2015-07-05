var testPoint1 = new Vector(-25,-25);
var testPoint2 = new Vector(-25,25);
var testPoint3 = new Vector(25,25);
var testPoint4 = new Vector(25,-25);
var testShapePoints = [testPoint1, testPoint2, testPoint3, testPoint4];
var testShape = new RotatableShape(testShapePoints);
var t = new entity("test",120,120,testShape,"entity");
var player1 = new entity("name",480,270,testShape,"player");
var entityList = [];
entityList.push(player1);

var upPressed = false;
var leftPressed = false;
var rightPressed = false;
var downPressed = false;
var paused = false;

function keys(event){
    key=(event.keyCode);
    if (key==38){
        upPressed = true;
        //up();
    }else if (key==37){
        leftPressed = true;
        //left();
    }else if (key==39){
        rightPressed = true;
        //right();
    }else if (key==40){
        downPressed = true;
        //down();
    }else if (key==32){
        //spacebar
    }
}

function keypress(event) {
    key = (event.keyCode);
    if (key == 32) {
        //spacebar
        if (paused) {
            paused = false;
        } else {
            paused = true;
        }
    }
}

function keyup(event){
    key=(event.keyCode);
    if (key==38){
        upPressed = false;
        //up
    }else if (key==37){
        leftPressed = false;
        //left
    }else if (key==39){
        rightPressed = false;
        //right
    }else if (key==40){
        downPressed = false;
        //down
    }else if (key==32){
        //spacebar
    }
}

function mouseWasClicked(evt){
    var x = event.x;
    var y = event.y;
    
    var tempc = document.getElementById("Canvas");
    var rect = tempc.getBoundingClientRect();
    
    x -= rect.left;
    y -= rect.top;
    if(x>0 && y>0){
        t.p.x = x;
        t.p.y = y;
    }
}

function draw(){
    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");
    ctx.font = "16px Arial";
    ctx.fillStyle = "#34495e";
    ctx.fillRect(0,0,960,540);

    //draw entities
    for (i=0;i<entityList.length;i++){
        entityList[i].display(ctx);
    }

    //display player variables
    ctx.fillText("x-velocity: " + Math.round(player1.v.x * 100) / 100, 20, 30);
    ctx.fillText("y-velocity: " + Math.round(player1.v.y * 100) / 100, 20, 60);
    
    if (paused) {
        alert("paused");
        ctx.fillText("PAUSED", 10, 30);
    }
}//draw

function gameloop(){
    if(!paused){
        for (i=0;i<entityList.length;i++){
            entityList[i].update();
        }
        draw();
    }
    throwaway = setTimeout("gameloop()",10);
}

function start(){
    img=document.getElementById("machine");
    t.setImage(img);
    draw();
    gameloop();
}
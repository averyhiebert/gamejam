var testPoint1 = new Vector(0,0);
var testPoint2 = new Vector(0,20);
var testPoint3 = new Vector(-50,50);
var testPoint4 = new Vector(50,20);
var testShapePoints = [testPoint1, testPoint2, testPoint3, testPoint4];
var testShape = new RotatableShape(testShapePoints);
var t = new entity("test",120,120,testShape,"entity");
var player1 = new entity("name",200,200,testShape,"player");
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

function keypress(event){
    key=(event.keyCode);
    
    if (key==32){
        //spacebar
        if(paused){
            paused=false;
            //gameloop();
        }else{
            paused=true;
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
    var c=document.getElementById("Canvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle="#AAAAFF";
    ctx.fillRect(0,0,960,540);
    ctx.font = "30px Arial";
    //t.display(ctx);
    
    
    for (i=0;i<entityList.length;i++){
        entityList[i].display(ctx);
    }
    
    //entityList[0].display(ctx);
    // player1.display(ctx);
    testVec = new Vector(480,270);
}

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
    
    
/*
    for(i=0;i<entityList.length;i++){
        alert(entityList[i].toString());
    }*/
    
    //alert(entityList[0].testName());
    img=document.getElementById("machine");
    t.setImage(img);
    draw();
    gameloop();
}
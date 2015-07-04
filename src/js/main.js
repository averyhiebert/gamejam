var testPoint1 = new Vector(0,0);
var testPoint2 = new Vector(0,20);
var testPoint3 = new Vector(-50,50);
var testPoint4 = new Vector(50,20);
var testShapePoints = [testPoint1, testPoint2, testPoint3, testPoint4];
var testShape = new RotatableShape(testShapePoints);
var t = new entity("test",120,120,testShape);

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

function draw(){
    var c=document.getElementById("Canvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle="#AAAAFF";
    ctx.fillRect(0,0,800,800);
    
    ctx.fillStyle="#FF0000";
    ctx.fillRect(100,100,10,10);
    
    //testdraw(ctx);
    //t.test();
    t.display(ctx);
    testVec = new Vector(200,200);
    testShape.display(testVec,ctx);
    img=document.getElementById("machine");
    ctx.drawImage(img,200,200);
    /**/
}

function gameloop(){
    if(!paused){
        t.update();
        
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
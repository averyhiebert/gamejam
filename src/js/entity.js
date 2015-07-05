function entity(n,x,y,shape,type){
    this.name = n;
    this.p = new Vector(x,y);//position
    this.v = new Vector(0,0);//velocity (should be used to find direction)
    this.a = new Vector(0,0);//acceleration
    this.steeringAccel = 0.1;    
    this.shape = shape;
    this.hasImage = false;

    
    //"player", "enemy", "bullet"
    this.entityType = type;
    
    switch (this.entityType){
        case "player":
        case "enemy":
            this.maxSpeed = 5;
            break;
        case "bullet":
            this.maxSpeed = 10;
            break;
        default:
            this.maxSpeed = 5;
            break;
    }

    
    this.test = test;
    function test(){
        alert("test"+this.p.x);
    }
    
    this.display = display;
    function display(ctx){
        if(!this.hasImage){
            this.shape.display(new Vector(this.p.x,this.p.y),ctx);
        }else{
            ctx.drawImage(this.img,this.p.x,this.p.y);
        }
    }
    
    this.testName = testName;
    function testName(){
        return "Name: " + this.name;
    }
    
    this.teststeer = teststeer;
    function teststeer(){
        this.a.x = 0;
        this.a.y = 0;
        
        if(upPressed){
            this.a.y = -1*this.steeringAccel;
        }else if(downPressed){
            this.a.y = this.steeringAccel;
        }else{
            
            if(this.v.y >= this.steeringAccel){
                this.a.y = -this.steeringAccel;
            }else if (this.v.y <= -this.steeringAccel){
                this.a.y = this.steeringAccel;
            }else{
                this.a.y = (-1)*this.v.y;
            }
        }
        
        if(leftPressed){
            this.a.x = -1*this.steeringAccel;
        }else if(rightPressed){
            this.a.x = this.steeringAccel;
        }else{
            if(this.v.x >= this.steeringAccel){
                this.a.x = -this.steeringAccel;
            }else if (this.v.x <= -this.steeringAccel){
                this.a.x = this.steeringAccel;
            }else{
                this.a.x = (-1)*this.v.x;
            }
        }
    }//teststeer
    
    this.chasePlayer = chasePlayer;
    function chasePlayer(){
        targetDirection = player1.p.subtract(this.p);
        targetUnitVector = targetDirection.normalize();
        this.a = targetUnitVector.multiply(this.steeringAccel);
    }
    
    
    
    this.shoot = shoot;
    function shoot(target){
        
        direction = target.subtract(this.p);
        normalizedDirection = direction.normalize();
        bulletVelocity = normalizedDirection.multiply(10);
        
        var point1 = new Vector(0,5);
        var point2 = new Vector(5,0);
        var point3 = new Vector(0,-5);
        var point4 = new Vector(-5,0);
        var shapePoints = [point1, point2, point3, point4];
        var bulletShape = new RotatableShape(shapePoints);
        bulletShape.color = "#FFFFFF";
        
        bullet = new entity("bullet",this.p.x,this.p.y,bulletShape,"bullet");
        bullet.v = bulletVelocity;
        entityList.push(bullet);
    }//shoot
    
    this.update = update;
    function update(){
        if(this.entityType == "player"){
            this.teststeer();
        }else if(this.entityType == "enemy"){
            this.chasePlayer();
        }
        
        this.v.x += this.a.x;
        this.v.y += this.a.y;
        
        if(Math.abs(this.v.magnitude())>this.maxSpeed){
            direction = this.v.normalize();
            
            this.v = direction.multiply(this.maxSpeed);
        }
        
        this.p.x += this.v.x;
        this.p.y += this.v.y;
        
    }//update
    
    this.toString = toString;
    function toString(){
        s = "" + name + "\n";
        s += "x: " + this.p.x + "  y: " + this.p.y + " \n";
        return s;
    }
    
    this.setImage = setImage;
    function setImage(newImage){
        this.hasImage = true;
        this.img = newImage;
    }   
}


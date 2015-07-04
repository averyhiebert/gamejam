function entity(n,x,y,shape,type){
    this.name = n;
    
    this.p = new Vector(x,y);//position
    this.v = new Vector(0,0);//velocity (should be used to find direction)
    this.a = new Vector(0,0);//acceleration
    this.shape = shape;
    this.hasImage = false;
    this.maxspeed = 1;
    
    //"player", "enemy", etc.
    this.entityType = type;
    
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
    
    this.teststeer = teststeer;
    function teststeer(){
        this.a.x = 0;
        this.a.y = 0;
        
        if (upPressed) {
            this.a.y = -0.03;
        }
        if (downPressed) {
            this.a.y = 0.03;
        }
        if (leftPressed) {
            this.a.x = -0.03;
        }
        if (rightPressed) {
            this.a.x = 0.03;
        }
    }
    
    this.update = update;
    function update(){
        if(this.entityType == "player"){
            this.teststeer();
        }
        this.v.x += this.a.x;
        this.v.y += this.a.y;
        this.p.x += this.v.x;
        this.p.y += this.v.y;
    }
    
    this.setImage = setImage;
    function setImage(newImage){
        this.hasImage = true;
        this.img = newImage;
    }
}


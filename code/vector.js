
/*
function entity(n,x,y){
    this.name = n;
    this.p = [x,y];//position
    this.v = [0,0];//velocity (should be used to find direction)
    this.a = [0,0];//acceleration
    
    this.test = test;
    function test(){
        alert("test"+this.p[0]);
    }
    
    this.display = display;
    function display(ctx){
        if(this.v[0]%2==0){
            ctx.fillStyle="#00FF00";
        }else{
            ctx.fillStyle="#FF0000";
            
        }
        ctx.fillRect(this.p[0],this.p[1],100,100);
        
    }
    
    this.teststeer = teststeer;
    function teststeer(x,y){
        this.a[0] = x;
        this.a[1] = y;
    }
    
    this.update = update;
    function update(){
        this.v[0] += this.a[0];
        this.v[1] += this.a[1];
        this.p[0] += this.v[0];
        this.p[1] += this.v[1];
    }
}*/

function Vector(x,y){
    this.x=x;
    this.y=y;
}

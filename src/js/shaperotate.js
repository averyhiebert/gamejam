function RotatableShape(p){
    //stores an array of vectors relative to one origin
    this.points = new Array();
    
    this.maxheight = -10000;
    this.minheight = 10000;
    this.maxwidth = -10000;
    this.minwidth = 10000;
    
    for(i=0;i<p.length;i++){
        this.points[i]=new Vector(p[i].x,p[i].y);
        
        if(p[i].x > this.maxwidth){
            this.maxwidth = p[i].x;
        }
        if(p[i].x < this.minwidth){
            this.minwidth = p[i].x;
        }
        if(p[i].y > this.maxheight){
            this.maxheight = p[i].y;
        }
        if(p[i].y < this.minheight){
            this.minheight = p[i].y;
        }
    }
    
    
    
    
    
    this.color = "#1abc9c";
    
    this.display = display;
    function display(origin,ctx){
        ctx.fillStyle=this.color;
        
        ctx.beginPath();
        ctx.moveTo(origin.x + this.points[0].x,origin.y + this.points[0].y);
        for(i=1;i<this.points.length;i++){
            ctx.lineTo(origin.x + this.points[i].x, origin.y + this.points[i].y);
        }
        
        ctx.closePath();
        ctx.fill();
    }
    
}
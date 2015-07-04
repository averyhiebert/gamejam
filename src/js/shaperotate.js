function RotatableShape(p){
    //stores an array of vectors relative to one origin
    this.points = new Array();
    for(i=0;i<p.length;i++){
        this.points[i]=new Vector(p[i].x,p[i].y);
    }
    
    this.display = display;
    function display(origin,ctx){
        ctx.fillStyle="#1abc9c";
        
        ctx.beginPath();
        ctx.moveTo(origin.x + this.points[0].x,origin.y + this.points[0].y);
        for(i=1;i<this.points.length;i++){
            ctx.lineTo(origin.x + this.points[i].x, origin.y + this.points[i].y);
        }
        ctx.closePath();
        ctx.fill();
    }
}
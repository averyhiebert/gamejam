function Sprite(img){
    this.image = img;
        
    this.display = display;
    function display(x,y,ctx){
        ctx.drawimage(this.image,x,y);
    }
}


function Vector(x,y){
    this.x=x;
    this.y=y;
    
    this.magnitude = magnitude;
    function magnitude(){
        return Math.sqrt((this.x)*(this.x) + (this.y)*(this.y));
    }
    
    this.normalize = normalize;
    function normalize(){
        mag = this.magnitude();
        return new Vector((this.x)/mag,(this.y)/mag);
    }
    
    this.multiply = multiply;
    function multiply(n){
        return new Vector(n*this.x,n*this.y);
    }

    function subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }
}//vector

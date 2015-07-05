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
        if(mag != 0){
            return new Vector((this.x)/mag,(this.y)/mag);
        }else{
            return new Vector(0,0);
        }
    }
    
    this.multiply = multiply;
    function multiply(n){
        return new Vector(n*this.x,n*this.y);
    }

    this.subtract = subtract;
    function subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }
}//vector

class Helicopter{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,{isStatic:true})
        this.body=loadImage("helicopter.png")
    }
}
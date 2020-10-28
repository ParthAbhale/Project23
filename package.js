class Package{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
        World.add(world, this.body);
        // this.body=loadImage("package.png")
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x,pos.y)
        rotate(angle)
        
    }
}
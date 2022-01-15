class Snow{
    constructor(x,y,width,height){
 var option={
     friction:1,
     density:1,
     isStatic:false,
 }
 this.width=width;
 this.height=height;
 this.body=Bodies.rectangle(x,y,this.width,this.height,option);
 World.add(world,this.body)
 this.image=loadImage("snow5.webp")
 
    }
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
rotate(angle)
imageMode(CENTER)
image(this.image,pos.x,pos.y,this.width,this.height)
pop()
}


}
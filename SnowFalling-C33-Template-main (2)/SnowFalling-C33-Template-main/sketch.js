const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgimage;
var ground,snow=[]
function preload(){
  bgimage=loadImage("snow3.jpg")
}


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  
}

function draw() {
  background(bgimage);  
Engine.update(engine);
if(frameCount%70==0){
  snow.push(new Snow(random(50,400),0,50,50))
}
for(var i=0;i<snow.length;i=i+1){
  snow[i].display();
}

  drawSprites();
}
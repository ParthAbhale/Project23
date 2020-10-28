var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible=false;


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(width/2,height-40,170,10);
	box1.shapeColor="red"

	box2=createSprite(width/2-90,585,10,150);
	box2.shapeColor="red"

	box3=createSprite(width/2+90,585,10,150);
	box3.shapeColor="red"
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box = Bodies.rectangle(width/2 , 660 , 100 , 10, {isStatic:true})
    World.add(world,box)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.x=box.position.x
  box1.y=box.position.y
  
  groundSprite.x=ground.position.x
  groundSprite.y=ground.position.y

  
  keyPressed();
  keyPressed1();
  keyPressed2();
  drawSprites();


 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
	packageSprite.visible=true;
     Matter.Body.setStatic(packageBody,false)


  }
}

function keyPressed1(){
	if (keyCode === RIGHT_ARROW){
		if (helicopterSprite.x<800){
		helicopterSprite.x=helicopterSprite.x+10
	}
	}
}

function keyPressed2(){
	if (keyCode === LEFT_ARROW){
		if (helicopterSprite.x>0){
		helicopterSprite.x=helicopterSprite.x-10
	}
	}
}

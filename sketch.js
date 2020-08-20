
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Roof(600,100,250,20);

	bobObject1 = new Bob(670,300);
	bobObject2 = new Bob(630,300);
	bobObject3 = new Bob(590,300);
	bobObject4 = new Bob(550,300);
	bobObject5 = new Bob(510,300);
	

	rope1 = new Rope(bobObject1.body,roof1.body,70,0);
	rope2 = new Rope(bobObject2.body,roof1.body,30,0);
	rope3 = new Rope(bobObject3.body,roof1.body,-5,0);
	rope4 = new Rope(bobObject4.body,roof1.body,-45,0);
	rope5 = new Rope(bobObject5.body,roof1.body,-85,0);

	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-50,y:-50});
	}
}
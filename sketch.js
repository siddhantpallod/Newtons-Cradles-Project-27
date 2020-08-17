
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(900,500);
	bobObject2 = new Bob(760,500);
	bobObject3 = new Bob(620,500);
	bobObject4 = new Bob(480,500);
	bobObject5 = new Bob(340,500);

	roof1 = new Roof(620,150,700,20);

	rope1 = new Rope(bobObject1,roof1,70,0);

	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
	
  drawSprites();
 
}




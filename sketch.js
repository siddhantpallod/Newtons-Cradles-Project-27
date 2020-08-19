
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

	roof1 = new Roof(620,100,700,20);

	bobObject1 = new Bob(900,600);
	bobObject2 = new Bob(760,600);
	bobObject3 = new Bob(620,600);
	bobObject4 = new Bob(480,600);
	bobObject5 = new Bob(340,600);

	rope1 = new Rope(bobObject1.body,roof1.body,280,0);
	rope2 = new Rope(bobObject2.body,roof1.body,140,0);
	rope3 = new Rope(bobObject3.body,roof1.body,0,0);
	rope4 = new Rope(bobObject4.body,roof1.body,-140,0);
	rope5 = new Rope(bobObject5.body,roof1.body,-280,0);

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


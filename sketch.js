
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papel

function preload() {

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject =new ground (width/2,670,width,20);
	dustbinObj =new dustbin ( 1200,650);

	Engine.run(engine);

	papel = new paper (450, 70);

	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  papel.display();

  
}

function keyPressed() {

if (KeyCode === UP_ARROW) {

  Matter.Body.applyForce(papel.body,papel.body.position, {x: 130, y: -145});

  }
}
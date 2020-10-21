const Constraint = Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	
}

function setup() {
	createCanvas(3000, 800);


	engine = Engine.create();
	world = engine.world;
	box1 = new box(900,100,70,70)
	box2 = new box(900,100,70,70)
	box3 = new box(900,100,70,70)
	box4 = new box(900,100,70,70)
	box5 = new box(900,100,70,70)
	box6 = new box(800,100,70,70)
	box7 = new box(800,100,70,70)
	box8 = new box(800,100,70,70)
	box9 = new box(800,100,70,70)
	box10 = new box(800,100,70,70)
	box11 = new box(800,100,70,70)
	box12 = new box(800,100,70,70)
	ground1 = new ground(700,600,1300,20)
	ball1 = new ball(200,200,80,80)
	rope1 = new rope(ball1.body,{x:600,y:50})
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  ground1.display();
  ball1.display();
  rope1.display();
  
  drawSprites();
 
}




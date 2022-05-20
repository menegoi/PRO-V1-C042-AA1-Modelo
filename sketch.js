
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

function preload(){
	
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //Atualizar motor de física
  engine.update();
  
  drawSprites();
 
}




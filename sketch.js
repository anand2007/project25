const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,bucket;
var start;
var wall;
var bg;
var song;

function preload()
{
  bg = loadImage("i.jpg");

}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;
 
  ground = new Ground(500,450,1000000,20);
  paper = new Paper(200,200);
  bucket = new Bucket(700,445);
  wall = new Wall(5,200,10,500);
  
  if(paper.y<0)
  {
	  paper.y = 200;
	  paper.x = 200;
  }
 

  keyPressed();
  
  Engine.run(engine);
  
}


function draw() {
  background(bg);
  Engine.update(engine);
  console.log(paper.body.position.x);
  //console.warn(paper.body.position.y);
   ground.display();
  paper.display();
  bucket.display();
  wall.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
	Body.applyForce(paper.body,paper.body.position,{x:20,y:-25});
	
  }

  // if(keyCode === DOWN_ARROW) {
  //   Body.applyForce(paper.body,paper.body.position,{x:-85,y:-220});
  // }
}

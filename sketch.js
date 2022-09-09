const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

var solo, corda, fruta;
var frutalink;

function setup() 
{
  createCanvas(500,600);
  engine = Engine.create();
  world = engine.world;

  solo =  new Ground(250,590,500,20);
  corda = new Rope(6, {x:245, y:30});

  //criar a fruta
  //fazer parte da composição
fruta=Bodies.circle(300,300,15);
Matter.Composite.add(corda.body,fruta)

//prendendo a fruta na corda
frutalink=new Link(corda,fruta)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);

  solo.display();
  corda.show();

  //mostrar a fruta
   ellipse(fruta.position.x,fruta.position.y,15,15)
}





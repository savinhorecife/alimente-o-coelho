const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var botao;

var engine;
var world;

var solo, corda, fruta,coelho;
var frutalink;
var bgImg, frutaImg, coelhoImg;

function preload(){
  bgImg = loadImage("./assets/background.png");
  frutaImg = loadImage("./assets/melon.png");
  coelhoImg = loadImage("./assets/blink_1.png");
}

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
  frutalink=new Link(corda,fruta);


  //criando o coelhinho
  coelho = createSprite(250,510,100,100);
  coelho.addImage(coelhoImg);
  coelho.scale = 0.2;


  //criar o botão que vai cortar a corda e derrubar a fruta
  botao=createImg("./assets/cut_btn.png")
  botao.position(230,30)
  botao.size(50,50)
  botao.mouseClicked(cortar)

 
  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);

  //IMAGEM DE FUNDA
  image(bgImg, width/2, height/2, 500, 600);

  Engine.update(engine);

  solo.display();
  corda.show();

  //mostrar a fruta
   image(frutaImg,fruta.position.x,fruta.position.y,60,60);

   //mostrar sprites
   drawSprites();
}

function cortar(){
  corda.break()
  frutalink.soltarlink()
  frutalink=null
}



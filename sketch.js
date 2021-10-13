const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
 

  //create player base body
  player = new Player(285,playerBase.body.position.y-153,50,180);


  //create player body
  playerBase = new PlayerBase(300,random(450,height-300),180,150);


}

function draw() {
  background(backgroundImg);

 


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //show the player image using image() function
   player.display();



   //show the playerbase image using image() function
 
   playerBase.display();
}

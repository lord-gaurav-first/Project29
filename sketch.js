const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_body;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level one
  block_1= new Block(640, 175, 30, 40);
  block_2 = new Block(660,175,30,40);
  block_3 = new Block(680,175,30,40);
  block_4 = new Block(700,175,30,40);
  block_5 = new Block(720,175,30,40);
  block_6 = new Block(740,175,30,40);
  block_7 = new Block(760,175,30,40);
  //level two
  block_8 = new Block(660,155,30,40);
  block_9 = new Block(680,155,30,40);
  block_10 = new Block(700,155,30,40);
  block_11 = new Block(720,155,30,40);
  block_12 = new Block(740,155,30,40);
  //level three
  block_13 = new Block(680,135,30,40);
  block_14 = new Block(700,135,30,40);
  block_15 = new Block(720,135,30,40);
  //top
  block_16 = new Block(700,115,30,40);

  polygon_body = Bodies.circle(50, 50, 50);
  World.add(world, polygon_body);

  slingshot = new SlingShot(polygon_body, {x:100, y:200});
}
function draw() {
  background(56,44,44);

  textSize(20);
  fill("lightyellow");


  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue")
  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();
  block_5.display();
  block_6.display();
  block_7.display();
  fill("pink");
  block_8.display();
  block_9.display();
  block_10.display();
  block_11.display();
  block_12.display();
  fill("turquoise");
  block_13.display();
  block_14.display();
  block_15.display();
  fill("grey");
  block_16.display();

  imageMode(CENTER);
  image(polygon_img, polygon_body.position.x, polygon_body.position.y, 40, 40);

  slingshot.display();

  // if (polygon_body.body.position.x !== 100 && polygon.body.position.y !== 200) {
  //   slingshot.reattach()
  // }

}

function mouseDragged(){
    // polygon_body.body.position.x = mousex;
    // polygon_body.body.position.y = mousey;
    slingshot.adjust();
}

function mouseReleased(){
  slingshot.fly()
}

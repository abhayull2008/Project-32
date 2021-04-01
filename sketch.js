const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;

function setup(){

 var canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

 
  ground1 = new Ground(400,height,2000,15);
  ground2 = new Ground(900,400,400,10);

  box1 = new Box(900,380,30,40);
  box2 = new Box(910,380,30,40);
  box3 = new Box(890,380,30,40);
  box4 = new Box(880,380,30,40);
  box5 = new Box(920,380,30,40);
  box6 = new Box(870,380,30,40);
  box7 = new Box(930,380,30,40);
  box8 = new Box(860,380,30,40);
  box9 = new Box(940,380,30,40);
  box10 = new Box(870,360,30,40);
  box11 = new Box(880,360,30,40);
  box12 = new Box(890,360,30,40);
  box13 = new Box(900,360,30,40);
  box14 = new Box(910,360,30,40);
  box15 = new Box(920,360,30,40);
  box16 = new Box(930,360,30,40);
  box17 = new Box(880,340,30,40);
  box18 = new Box(890,340,30,40);
  box19 = new Box(900,340,30,40);
  box20 = new Box(910,340,30,40);
  box21 = new Box(920,340,30,40);
  box22 = new Box(890,320,30,40);
  box23 = new Box(900,320,30,40);
  box24 = new Box(910,320,30,40); 
  box25 = new Box(900,300,30,40);

  block1 = new Block(715,375,30,40);
  block2 = new Block(715,215,30,40);
  block3 = new Block(715,175,30,40);
  block4 = new Block(715,253,30,40);
  
  block5 = new Block(720,138,40,30);
  block6 = new Block(760,138,40,30);
  block7 = new Block(800,138,40,30);
  block8 = new Block(840,138,40,30);
  block9 = new Block(880,138,40,30);
  block10 = new Block(920,138,40,30);
  block11 = new Block(960,138,40,30);
  block12 = new Block(1000,138,40,30);
  block13 = new Block(1040,138,40,30);
  block14 = new Block(1080,138,40,30);
    
  polygon = Bodies.circle(50,200,20);
  fill(0);
  World.add(world,polygon);
 
  slingShot = new Slingshot(this.polygon,{x:200,y:200});
}

function draw(){
 background("white");
    
  Engine.update(engine);

  ground1.display();
  ground2.display();

   ellipse(RADIUS);
   ellipse(polygon.position.x,polygon.position.y,40,40);

   slingShot.display();

  fill("purple");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
   
    fill("red");
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();



    fill("darkgreen");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

   fill("turquoise");
    box22.display();
    box23.display();
    box24.display();
    
    fill("black");
    box25.display();

    fill("aqua");
    block1.display();
    block2.display();
    block3.display();
    block4.display();

    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
  
  
function mouseReleased(){
    slingShot.fly();
}


function keyPressed(){
    if(keyCode === 32){
      
      slingShot.attach(this.polygon);
      Matter.Body.setPosition(this.polygon, {x:200, y:200});
}
}



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonimg,polygon,slingshot
var x=x,y=y,backgroundImg;
var score=0;
var bg = "images/light.jpg";


function preload(){
  getBackgroundImage();
    polygonimg=loadImage("images/polygon.png");
  }

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(500,350,250,10);
    ground1 = new Ground(900,200,250,10);
    groundulti=new Ground2(600,height,1200,20);

    box1=new Box(420,327,30,40);
    box2=new Box(450,327,30,40);
    box3=new Box(480,327,30,40);
    box4=new Box(510,327,30,40);
    box5=new Box(540,327,30,40);
    box6=new Box(570,327,30,40);
    box7=new Box(450,297,30,40);
    box8=new Box(480,297,30,40);
    box9=new Box(510,297,30,40);
    box10=new Box(540,297,30,40);
    box11=new Box(480,257,30,40);
    box12=new Box(510,257,30,40);
    box13=new Box(496,217,30,40);
    
    
   

    box100=new Box(820,177,30,40);
    box200=new Box(850,177,30,40);
    box300=new Box(880,177,30,40);
    box400=new Box(910,177,30,40);
    box500=new Box(940,177,30,40);
    box600=new Box(970,177,30,40);
    box700=new Box(850,147,30,40);
    box800=new Box(880,147,30,40);
    box900=new Box(910,147,30,40);
    box1000=new Box(940,147,30,40);
    box1100=new Box(880,117,30,40);
    box1200=new Box(910,117,30,40);
    box1300=new Box(896,87,30,40);
    
    polygon = Bodies.circle(140,370,20);
    World.add(world,polygon);
   
    slingshot = new SlingShot(this.polygon,{x:190,y:370});
}

function draw(){
  background(56,44,44); 
    //if(backgroundImg)
    //background(backgroundImg);
    //Engine.update(engine);

    textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it towards the blocks",20,30);
  text("Score : "+score,1050,30);
  textFont('courier');
  textSize(20);
  text("Press Space to try again!",870 ,450);
    Engine.update(engine);
    ground.display();
    ground1.display();
    groundulti.display()

    fill("pink");
    stroke("purple");
    strokeWeight(3);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    fill("skyblue");
    stroke("blue");
    strokeWeight(3);
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    fill("purple");
    stroke("violet");
    strokeWeight(3);
    box11.display();
    box12.display();
    fill("lightgrey");
    stroke("cyan");
    strokeWeight(3);
    box13.display();
    fill("pink");
    stroke("purple");
    strokeWeight(3);
    
    box100.display();
    box200.display();
    box300.display();
    box400.display();
    box500.display();
    box600.display();
    fill("skyblue");
    stroke("blue");
    strokeWeight(3);
    box700.display();
    box800.display();
    box900.display();
    box1000.display();
    fill("purple");
    stroke("violet");
    strokeWeight(3);
    box1100.display();
    box1200.display();
    box12.display();
    fill("lightgrey");
    stroke("cyan");
    strokeWeight(3);
    box1300.display();
    fill("pink");
    stroke("purple");
    strokeWeight(3);

    imageMode(CENTER)
  image(polygonimg ,polygon.position.x,polygon.position.y,40,40);
    slingshot.display();  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();

  box100.score();
  box200.score();
  box300.score();
  box400.score();
  box500.score();
  box600.score();
  box700.score();
  box800.score();
  box900.score();
  box1000.score();
  box1100.score();
  box1200.score();
  box1300.score();

   console.log(bg);
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(responseJSON);
  //console.log(hour);
  if (hour >= 06 && hour <= 18) {
    bg = "images/light.jpg";
  } else {
    bg="images/dark.jpg";
  }

  //backgroundImg = loadImage(bg);
  
}
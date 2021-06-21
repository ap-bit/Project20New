var iss;
var ashish;

var bathImg ;
var brushImg ;
var drinkImg ;
var eatImg;
var gymImg;
var moveImg; 
var sleepImg;
var issImg;

function preload(){
     bathImg = loadAnimation("bath1.png", "bath2.png");
     brushImg = loadAnimation("brush.png");
     drinkImg = loadAnimation("drink1.png", "drink2.png");
     eatImg = loadAnimation("eat1.png", "eat2.png");
     gymImg = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
     moveImg = loadAnimation("move1.png", "move.png");
     sleepImg = loadImage("sleep.png");
     issImg = loadImage("iss.png");
 
}



function setup() {
  createCanvas(800, 400);

  iss = createSprite(400, 200, 20,20);
  iss.addImage(issImg);
  iss.scale = 0.15

  ashish = createSprite(400, 200, 20, 20);
  ashish.addImage(sleepImg);
  ashish.scale = 0.1
 
}






function draw() {
  background(255,255,255);  

  edges= createEdgeSprites();
  ashish.collide(edges);

  
  
  if (keyDown(UP_ARROW)){
    ashish.addAnimation("brushing",brushImg);
    ashish.changeAnimation("brushing");
    ashish.x = 400;
    ashish.y = 200;
    ashish.velocityX = 0;
    ashish.velocityY = 0;
  }

  if (keyDown(DOWN_ARROW)){
    ashish.addAnimation("gyming",gymImg);
    ashish.changeAnimation("gyming");
    ashish.x = 400;
    ashish.y = 200;
    ashish.velocityX = 0;
    ashish.velocityY = 0;
  }

  if (keyDown(LEFT_ARROW)){
    ashish.addAnimation("bathing",bathImg);
    ashish.changeAnimation("bathing");
    ashish.x = 400;
    ashish.y = 200;
    ashish.velocityX = 0;
    ashish.velocityY = 0;
  }

  

  if (keyDown("RIGHT_ARROW")){
    ashish.addAnimation("eating",eatImg);
    ashish.changeAnimation("eating");
    ashish.velocityX = 2
    ashish.velocityY = 2;
  }



  if (keyDown("s")){
    ashish.addAnimation("moving",moveImg);
    ashish.changeAnimation("moving");
    ashish.x = 400;
    ashish.y = 200;
    ashish.velocityX = 0;
    ashish.velocityY = 0;
  }

  text("Press Up Arrow to Restart the game!", 500, 200)



 drawSprites();
}




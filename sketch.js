var fixedRect, movingRect;
var bouncingRect1, bouncingRect2;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600, 200, 80, 50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;

  bouncingRect1 = createSprite(200,50,30,20);
  bouncingRect2 = createSprite(200,350,30,20);

  bouncingRect1.velocityY = 5;
  bouncingRect2.velocityY = -5;

}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(bouncingRect1.x - bouncingRect2.x < bouncingRect1.width/2 + bouncingRect2.width/2
    && bouncingRect2.x - bouncingRect1.x < bouncingRect1.width/2 + bouncingRect2.width/2){
      bouncingRect1.velocityX = bouncingRect1.velocityX * (-1);
      bouncingRect2.velocityX = bouncingRect2.velocityX * (-1);
    }

  if(bouncingRect1.y - bouncingRect2.y < bouncingRect1.height/2 + bouncingRect2.height/2
    && bouncingRect2.y - bouncingRect1.y < bouncingRect1.height/2 + bouncingRect2.height/2){
       bouncingRect1.velocityY = bouncingRect1.velocityY * (-1);
       bouncingRect2.velocityY = bouncingRect2.velocityY * (-1);
    }
  
  drawSprites();
}
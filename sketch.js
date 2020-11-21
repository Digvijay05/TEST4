var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(300,200, 80, 50);
  car.shapeColor = "yellow";
  car.debug = true;
  car.velocityX=6;
  wall = createSprite(1100,200, 50, 80);
  wall.shapeColor = "yellow";
  wall.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(car,wall)){
    
    textSize(15)
    text("The car Has Crashed.",600,100);
  }
  bounceOff(car,wall);
  drawSprites();
}


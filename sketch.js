var moveR, stillR;


function setup() {
  createCanvas(800,400);
  stillR=createSprite(400, 200, 50, 50);
  moveR=createSprite(400, 200, 50, 50);
  moveR.shapeColor="green"
  stillR.shapeColor="green"
}

function draw() {
  background(255,255,255); 
  moveR.x=World.mouseX
  moveR.y=World.mouseY
  if(moveR.x-stillR.x<moveR.width/2+stillR.width/2&&
    stillR.x-moveR.x<moveR.width/2+stillR.width/2&&
    moveR.y-stillR.y<moveR.height/2+stillR.height/2&&
    stillR.y-moveR.y<moveR.height/2+stillR.height/2  ){
    moveR.shapeColor="red"
    stillR.shapeColor="red"
  }
  else{moveR.shapeColor="green"
  stillR.shapeColor="green"}
  drawSprites();
  
}
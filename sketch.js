var box1;
function setup() {
  createCanvas(400,400);
  box1=createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  box1.velocityX=box1.velocityX+1;
  drawSprites();
}





var spaceBgImage, spacecraftImg, spacecraftImg2,spacecraftImg3,spacecraftImg4, issImg;
var iss, spacecraft
var hasDocked=false
var point;
function preload(){
spaceBgImage=loadImage("spacebg.jpg")
spacecraftImg=loadAnimation("spacecraft1.png")
spacecraftImg2=loadAnimation("spacecraft2.png")
spacecraftImg3=loadAnimation("spacecraft3.png")
spacecraftImg4=loadAnimation("spacecraft4.png")
issImg=loadImage("iss.png")
}
function setup() {
  createCanvas(800,400);
 
  iss= createSprite(400, 150, 50, 50);
  iss.addImage(issImg)
  iss.scale=0.8
  spacecraft=createSprite(400,300,50,50)
  spacecraft.addAnimation("1",spacecraftImg)
  spacecraft.addAnimation("2",spacecraftImg2)
  spacecraft.addAnimation("3",spacecraftImg3)
  spacecraft.addAnimation("4",spacecraftImg4)
  spacecraft.scale=0.2
  point=createSprite(350,180,20,20)
 point.visible=false;
 
}

function draw() {
  background(spaceBgImage);  
  drawSprites();
  if (!hasDocked){
    //write code to set random x position for spacecraft
    spacecraft.x=Math.round(random(310,330))
    if (keyDown("LEFT_ARROW")){
      spacecraft.changeAnimation("3",spacecraftImg3)
      spacecraft.x=spacecraft.x-5;
    }
    if (keyDown("RIGHT_ARROW")){
      spacecraft.changeAnimation("4",spacecraftImg4)
      spacecraft.x=spacecraft.x+5

    }
    if (keyDown("UP_ARROW")){
      spacecraft.changeAnimation("1",spacecraftImg)
      spacecraft.y=spacecraft.y-5
    }
    if (keyDown("DOWN_ARROW")){
      spacecraft.changeAnimation("2",spacecraftImg2)
      //spacecraft.y=spacecraft.y+5
    }
    if (spacecraft.isTouching(point)){
      hasDocked=true;
    
    }
  
  }
  if (hasDocked===true){
  fill("pink")
  text("DOCKING IS SUCCESSFUL",400,380)
  }
}




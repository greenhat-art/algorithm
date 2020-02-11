var fixedrect,movingrect;
var cD,aD;
var cDH,aDH;

function setup() {
  createCanvas(800,400);
  fixedrect= createSprite(200,200,50,80);
  fixedrect.shapeColor= "green";
  movingrect= createSprite(400,200,80,30);
  movingrect.shapeColor= "green";
}

function draw() {
  background(255,255,255);  
  movingrect.x= World.mouseX;
  movingrect.y= World.mouseY;
  
  cD= fixedrect.width/2 + movingrect.width/2;
  aD= Math.abs (movingrect.x - fixedrect.x);

  cDH= fixedrect.height/2 + movingrect.height/2;
  aDH= Math.abs (movingrect.y-fixedrect.y);

  text(cD,50,50);
  text(aD,50,80);

  if (aD<cD && aDH<cDH){
    fixedrect.shapeColor= "red";
    movingrect.shapeColor= "red";
  }
  else {
    fixedrect.shapeColor= "green";
    movingrect.shapeColor= "green";
}


  drawSprites();
}
var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage;
var leaf,leafImage;
var orangeLeaf,orangeLeafImage;
var redLeaf,redLeafImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
appleImage = loadImage("apple.png");
leafImage = loadImage("leaf.png");
orangeLeafImage = loadImage("orangeLeaf.png");
redLeafImage = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.07;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);

  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples()
createLeaves()
createorangeLeaves()
createredLeaves()
  drawSprites();
}

function createApples(){

if(frameCount%80===0)
{
  apple = createSprite(random(50,350),40,10,10);
  apple.scale =0.07;
  apple.addImage(appleImage);
  apple.velocityY =+5;
  apple.lifetime = 50;
}

var apple = Math.round(random(1,2));
 if(frameCount%80==0) {
   if(apple==1)
     createApples()
   }
else{
createLeaves()
createorangeLeaves()
createredLeaves()
}


 }







function createLeaves(){

  if(frameCount%80===0)
{
  leaf = createSprite(random(50,350),40,10,10);
  leaf.scale =0.08;
  leaf.addImage(leafImage);
  leaf.velocityY =+5;
  leaf.lifetime = 60;
}









}


function createorangeLeaves(){

  if(frameCount%80===0)
{
  orangeLeaf = createSprite(random(50,350),40,10,10);
  orangeLeaf.scale =0.06;
  orangeLeaf.addImage(orangeLeafImage);
  orangeLeaf.velocityY =+5;
  orangeLeaf.lifetime = 70;
}









}


function createredLeaves(){

  if(frameCount%80===0)
{
  redLeaf = createSprite(random(50,350),40,10,10);
  redLeaf.scale =0.07;
  redLeaf.addImage(redLeafImage);
  redLeaf.velocityY =+5;
  redLeaf.lifetime = 80;
}









}
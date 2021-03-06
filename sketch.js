var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaves, leavesImg;
var select_sprites = Math.(round(1,2));

if (frameCount % 80 == 0){
  if (select_sprites == 1){
    createapples()
  }
  else{
    createleaves()
  }
}

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg= loadImage("orangeLeaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.x = mouseX
}

function createapples(){
  if(frameCount % 80=== 0 ){
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg)
    apple.scale=0.5
  }

}

function createleaves(){
  if(frameCount % 80 === 0){
    leaves = createSprite(random(50,350),40,10,10);
    leaves.addImage(leavesImg)
    leaves.scale=0.5
  }
  
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
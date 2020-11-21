
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,groundImg
var score

function preload(){
  
   monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(50,400,20,20);
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(300,450,1000,10)
  ground.velocityX=-2;
  ground.x=ground.width/2

  FoodGroup=new Group();
  obstacleGroup=new Group();
  score=0
}


function draw() {
  background("lightblue")
  
 score=Math.ceil(frameCount/frameRate())
  text("survival time "+score,500,30)
  monkey.collide(ground) 
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY = -20;
  }
  
  monkey.velocityY=monkey.velocityY+3 ;
  
  spawnObstacles();
  
  spawnfood();
  
  
  drawSprites();
}


function spawnfood() {
  if (frameCount % 80 === 0) {
    var food= createSprite(600,120,40,10);
    food.y = Math.round(random(40,220));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    
    
    //add each cloud to the group
    FoodGroup.add(food);

  }
  
}

function spawnObstacles(){
 if (frameCount % 120 === 0){
   var obstacle = createSprite(400,410);
   obstacle.velocityX = -3;
   obstacle.addImage(obstacleImage);
   
   
    obstacle.scale = 0.2;
    //obstacle.lifetime = 300; 
   
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
   
   obstacle.depth = monkey.depth;
   monkey.depth = monkey.depth+1;
 }
}



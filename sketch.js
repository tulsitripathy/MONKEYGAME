
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score,survivalTime;

function preload(){
  
  
  monkey_running =                  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600); 
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
monkey=createSprite(100,420,20,20);
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.2;
  
  ground=createSprite(100,450,900,10);
  ground.velocityX=-3;
  ground.x=ground.width/2;
  ground.scale=1;

  survivalTime = 0;
}


function draw() {
  background("lightBlue");
  stroke("black");
    fill("black");
    textSize(30);
  
  text("Survial Time:"+  survivalTime, 200, 100);
  
  survivalTime=Math.ceil(frameCount/frameRate());
  
  if(ground.x<0){
   ground.x=ground.width/2;
  }
  monkey.collide(ground);
  
  if(keyDown("space")){
   monkey.velocityY=-8;
  }
 
monkey.velocityY=monkey.velocityY+0.8;
  
  bananas();
  obstacles();
  
drawSprites();  
}

function bananas(){
  if(frameCount%80===0){
  banana=createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    
    banana.velocityX = -3;
    banana.lifetime = 150;
    
    bananaGroup.add(banana);
     
  }
}
function obstacles() {
  if (frameCount % 300 === 0){
    obstacle = createSprite(400,430,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 150;
    obstacle.scale = 0.1 ;
    obstacleGroup.add(obstacle);
  }

}







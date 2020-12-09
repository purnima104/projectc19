var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =         loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
      
function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  bananaGroup=createGroup();

}

function draw() {
background(0)
  if(keyDown("space")){
monkey.velocityY=-10
 }
monkey.velocityY=monkey.velocityY+0.8 
  if(ground.x<0){
    ground.x=200
  }
monkey.collide(ground)
var survivalTime=0
stroke("white")
textSize(20)
fill("white")
text("Score:"+score,500,50)

stroke("black")
textSize(20)
fill("black")
survivalTime=Math.ceil(frameCount/frameRate())
text("survivalTime:"+survivalTime,100,50)
Food()
obstacle()
  
drawSprites()
  
}
function Food(){
  if(World.frameCount % 80 === 0){
   banana=createSprite(400,200,20,20)
banana.scale=0.2
banana.addImage(bananaImage)
banana.y=Math.round(random(50,340))
banana.velocityX=-4
banana.lifetime=180
bananaGroup.add(banana)
  }
}
function obstacle(){
  if(World.frameCount % 300 === 0){
    var obstacle=createSprite(400,165,40,10)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-6
    obstacle.lifetime=200
    obstacle.scale=0.5
  }   
}

 



  

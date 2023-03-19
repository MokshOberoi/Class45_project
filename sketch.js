var bgSprite;
var bgImage;
var player;
var playerImage;
var bullet;
var bulletImage;
var enemy;
var enemyImage;
var meteor;
var meteorImage;

function preload(){
      //Load the images
      bgImage = loadImage("Images/bg2.jpg");
      playerImage = loadImage("Images/spaceship.png");
      bulletImage = loadImage("Images/bullet.png");
      enemyImage = loadImage("Images/enemy spaceship.png");
      meteorImage = loadImage("Images/meteor.png")

}
  
function setup(){

    createCanvas(windowWidth,windowHeight);
    //Create bg and add velocity to it 
    bgSprite = createSprite(windowWidth/2,windowHeight/2,50,50);
    bgSprite.addImage(bgImage);
    bgSprite.scale = 0.7;
    bgSprite.velocityX = -3;
    //Create player and add image
    player = createSprite(200,windowHeight-50,20,20);
    player.addImage(playerImage);
    player.scale = 0.5;

}

function draw(){
      //Background should not end
      if (bgSprite.x<100){
          bgSprite.x = windowWidth/2;
      }

      //Add movement keys to the player
      if (keyDown("w")){
          player.y = player.y-10;
      }

      if (keyDown("s")){
          player.y = player.y+10;
      }

      if (keyDown("a")){
          player.x = player.x-10;
      }

      if (keyDown("d")){
          player.x = player.x+10;
      }

      //Set a boundary for the player
      if (player.y<0){
          player.y = 30;
      }

      if (player.y>windowHeight){
          player.y = windowHeight-30;
      }

      if (player.x<0){
          player.x = 30;
      }

      if (player.x>windowWidth){
          player.x = windowWidth-50;
      }

      //Create bullet
      if (keyDown("space")){
          bullet = createSprite(player.x + 75,player.y-2,10,10);
          bullet.addImage(bulletImage);
          bullet.velocityX = 10;
          bullet.scale = 0.1;
      }

      //Spawn enemy spaceships
      if (frameCount % 80 === 0 ){
          enemy = createSprite(windowWidth,Math.round(random(100,windowHeight-100)),20,20);
          enemy.addImage(enemyImage);
          enemy.scale = 0.1;
          enemy.velocityX = -5;
      }

      //Spawn meteors
      if (frameCount % 150 === 0 ){
          meteor = createSprite(windowWidth,Math.round(random(100,windowHeight-100)),20,20);
          meteor.addImage(meteorImage);
          meteor.scale = 0.1;
          meteor.velocityX = -5;
    }


      drawSprites();

  
}

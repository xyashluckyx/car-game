var playerCount, database;
var PLAY=0;
var END=1;
var gameState=PLAY;
var form, player, game;
var allPlayers;
var distance=0;
var car1Img,car2Img,car3Img,car4Img;
var track1Img,track2Img;
var groundImg;

function preload(){
  car1Img=loadImage("./images/car1.png");
  car2Img=loadImage("./images/car2.png");
  car3Img=loadImage("./images/car3.png");
  car4Img=loadImage("./images/car4.png");
  car5Img=loadImage("./images/car5.png");
  car6Img=loadImage("./images/car6.jpg");
  car7Img=loadImage("./images/car7.jpg");

  track1Img=loadImage("./images/track.jpg");

  truckImg=loadImage("./images/truck.jpg");
}

function setup(){
  createCanvas(1400,800);

  ground=createSprite(700,400,10,10);
  ground.y = ground.height/2;
  ground.velocityY=15;
  ground.addImage(track1Img);
  ground.scale=2.8;

  car1=createSprite(550,700,10,10);
  car1.addImage(car3Img);
  car1.scale=1.7;

  obstacleGroup1=new Group();

  obstacleGroup2=new Group();

  obstacleGroup3=new Group();

  obstacleGroup4=new Group();

  obstacleGroup5=new Group();

  obstacleGroup6=new Group();

  obstacleGroup7=new Group();

  obstacleGroup8=new Group();

  obstacleGroup9=new Group();

}

function draw(){
  background("black");

  if(gameState===PLAY){
    var select_balloon=Math.round(random(1,5));
  
    if(frameCount % 100 == 0)
    {
        if(select_balloon == 1)
        {
          obstacle3();
        } else if(select_balloon == 2)
        {
          obstacle2();
        } else if(select_balloon == 3)
        {
          obstacle1();
        }
  }
  
    if(ground.y>800){
      ground.y=400;
    }
   //write if conditions to move car1
    if(keyDown("right")){
      car1.x=car1.x+10;
    }
  
    if(keyDown("left")){
      car1.x=car1.x-10;
    }

    //write code to gameover
  if(obstacleGroup1.isTouching(car1)){
    gameState=END;
  }
  
  if(obstacleGroup2.isTouching(car1)){
    gameState=END;
  }

  if(obstacleGroup3.isTouching(car1)){
    gameState=END;
  }

  if(obstacleGroup4.isTouching(car1)){
    gameState=END;
  }

  if(obstacleGroup5.isTouching(car1)){
    gameState=END;
  }

  if(obstacleGroup6.isTouching(car1)){
    gameState=END;
  }

  if(obstacleGroup7.isTouching(car1)){
    gameState=END;
  }

  if(obstacleGroup8.isTouching(car1)){
    gameState=END;
  }

  if(obstacleGroup9.isTouching(car1)){
    gameState=END;
  }


  }
 
  if(gameState===END){
    ground.velocityY=0;
    obstacleGroup1.setVelocityYEach(0);
    obstacleGroup1.setLifetimeEach(-1);
    obstacleGroup2.setVelocityYEach(0);
    obstacleGroup1.setLifetimeEach(-1);
    obstacleGroup3.setVelocityYEach(0);
    obstacleGroup1.setLifetimeEach(-1);
    obstacleGroup4.setVelocityYEach(0);
    obstacleGroup4.setLifetimeEach(-1);
 
    obstacleGroup6.setVelocityYEach(0);
    obstacleGroup6.setLifetimeEach(-1);
    obstacleGroup7.setVelocityYEach(0);
    obstacleGroup7.setLifetimeEach(-1);
    obstacleGroup8.setVelocityYEach(0);
    obstacleGroup8.setLifetimeEach(-1);
    obstacleGroup9.setVelocityYEach(0);
    obstacleGroup9.setLifetimeEach(-1);
    obstacleGroup5.setVelocityYEach(0);
    obstacleGroup5.setLifetimeEach(-1);

   
  }

  drawSprites();

  if(gameState===END){
    fill("red");
    textSize(40);
    text("GameOver",500,200);
  }
}

function obstacle1(){
  if(frameCount%10===0){
  var car2=createSprite(450,0,10,10);
  car2.addImage(car2Img);
  car2.scale=1.7;
  car2.velocityY=random(10,15);
  car2.lifetime=260;
  obstacleGroup1.add(car2);

  var car4=createSprite(100,0,10,10);
  car4.velocityY=random(10,15);
  car4.addImage(car1Img);
  car4.scale=1.7;
  car4.lifetime=200;
  car4.x=car2.x+150;
  car4.y=car2.y-random(300,1500);
  obstacleGroup4.add(car4);

  var truck=createSprite(100,0,10,10);
  truck.velocityY=random(10,20);
  truck.addImage(truckImg);
  truck.scale=1;
  truck.lifetime=200;
  truck.x=car4.x+270;
  truck.y=car4.y-random(300,1500);
  obstacleGroup5.add(truck);

  
  var car6=createSprite(100,0,10,10);
  car6.velocityY=random(10,20);
  car6.addImage(car5Img);
  car6.scale=0.2;
  car6.lifetime=200;
  car6.x=car4.x+550;
  car6.y=car4.y-random(300,1500);
  obstacleGroup6.add(car6);

  var car7=createSprite(100,0,10,10);
  car7.velocityY=random(10,20);
  car7.addImage(car6Img);
  car7.scale=0.8;
  car7.lifetime=200;
  car7.x=car6.x+150;
  car7.y=car6.y-random(300,1500);
  obstacleGroup7.add(car7);

  var car8=createSprite(100,0,10,10);
  car8.velocityY=random(10,15);
  car8.addImage(car7Img);
  car8.scale=0.8;
  car8.lifetime=200;
  car8.x=car2.x-200;
  car8.y=car2.y-random(300,1500);
  obstacleGroup8.add(car8);

  var car9=createSprite(100,0,10,10);
  car9.velocityY=random(10,20);
  car9.addImage(car4Img);
  car9.scale=1.7;
  car9.lifetime=200;
  car9.x=car8.x-150;
  car9.y=car8.y-random(300,1500);
  obstacleGroup9.add(car9);

}
}

function obstacle2(){
  if(frameCount%50===0){
  var car=createSprite(100,0,10,10);
  car.addImage(car1Img);
  car.scale=1.7;
  car.velocityY=random(10,15);
  car.lifetime=260;
  obstacleGroup2.add(car);

 
}
}

function obstacle3(){
  if(frameCount%50===0){
  var car3=createSprite(250,0,10,10);
  car3.addImage(car4Img);
  car3.scale=1.7;
  car3.velocityY=random(10,15);
  car3.lifetime=260;
  obstacleGroup2.add(car3);
}
}


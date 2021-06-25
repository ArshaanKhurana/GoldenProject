var canvas, backgroundImage;
var mainMenuImg
var arrowImg;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var database;
var carsAtEnd = 0;


function preload(){
  mainMenuImg = loadImage("../Images/mainmenuBackground.png");;
  SuperHeroimg = loadImage("../Images/HeroMain1.png");
  arrowImg = loadImage("../Images/arrow.png");
  OpenLockImg = loadImage("../Images/openLock.png");
  CloseLockImg = loadImage("../Images/lock.png");
 
}


function setup(){
  canvas = createCanvas(1000,900);
  //database = firebase.database();
  Hero = new MainScreen(450,500);
  lvl1 = new Levels(400,150,"Level 1");
  lvl2 = new Levels(600,150,"Level 2");
  lvl3 = new Levels(400,300,"Level 3");
  lvl4 = new Levels(600,300,"Level 4");
  lvl5 = new Levels(500,450,"Level 5");
  
}



function draw(){
 if(gameState === 0){
  Hero.display();
 }

 if(gameState === 1){
  lvl1.display();
  lvl2.display();
  lvl3.display();
  lvl4.display();
  lvl5.display();

   
 }
 


 drawSprites();

}




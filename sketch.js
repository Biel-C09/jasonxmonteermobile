const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world; 
var bg_Img;
var monster, monsterV0;
var monsterDead;
var slime;
var slimeDead
var jason;
var jasonLeft, jasonRight;
var love, loveImg;
var invisibleGround1, groundInvisible;
var invisibleGround2;
var invisibleGround3;
var invisibleGround4;
var invisibleEdge1;
var edgePortal1;
var edgePortal2;
var invisible;
var paredeInvisivel;
var upButton, downButton, leftButton, rightButton, zButton, xButton,upImg, downImg, leftImg, rightImg, zImg, xImg;
var laser, laserImg, laserGroup, laserD, laserDImg, laserDGroup;
var fireBall, fireBallImg, fireBallGroup;
var cloudsGroup;
var cloudImg;
var cloud;
var solo, ground, tower, twImage, support, supportImg;
var coracao;
var saude, saude1, saude2, saude3, saude4;
var shooting;
var gameover;
var bg_sound;
var jump;
var die;
var victorySound
var hahaha;
var paper, jasonXmonster, victory, victoryImg;
var gameOverImg, gameOverTittle, restartImg, restart;
var cage, cageOpen, cageGround, cageSound, prision, prisionOpen;
var princessSad, princessHappy, princessSadImg, princessHappImg, helpPrincessSong;
var happySong
var edgeVisible1, edgeVisible2;
var lifeJason = 5;
var lifeMonster = 00;
var gameState = "serve";

function preload(){
  bg_Img = loadImage("background.jpg");
  monster = loadAnimation("glob-monster1.png", "glob-monster2.png", "glob-monster3.png", "glob-monster4.png");
  monsterV0 = loadImage("glob-monster1.png");
  monsterDead = loadImage("glob_monster_dead.png");
  tp1 = loadImage("poço.png");
  tp2 = loadImage("poço.png");
  laserImg = loadImage("laser.png");
  laserDImg = loadImage("laserD.png");
  fireBallImg = loadImage("fireball.png")
  coracao = loadImage("life-jason.png");
  jasonLeft = loadAnimation("jason1-left.png", "jason2-left.png");
  jasonRight = loadAnimation("jason1-right.png", "jason2-right.png")
  cloudImg = loadImage("cloud.png");
  solo = loadImage("ground.png");
  loveImg = loadImage("love.png");
  loveImg = loadImage("love.png");
  twImage = loadImage("tower.png");
  supportImg = loadImage("support.png")
  prision = loadImage("cage.png");
  upImg = loadImage("arrow-up.png");
  downImg = loadImage("arrow-down.png");
  rightImg = loadImage("arrow-right.png");
  leftImg = loadImage("arrow-left.png");
  zImg = loadImage("zbutton.png");
  xImg = loadImage("xbutton.png");
  paper = loadImage("logojason.png");
  victoryImg = loadImage("gamewin.png");
  restartImg = loadImage("Retrybutton.png");
  gameOverImg = loadImage("tittlegameover.png");
  princessSadImg = loadImage("princess-sad.png");
  princessHappImg = loadImage("princess-happy.png");
  prisionOpen = loadImage("cage-open.png");
  shooting = loadSound("shooting-laser.wav");
  jump = loadSound("jump.flac");
  victorySound = loadSound("victorysound.wav");
  gameover = loadSound("jason.game-over.wav");
  bg_sound = loadSound("bg-music.wav");
  roar = loadSound("monster-roar.mp3");
  die = loadSound("die.mp3");
  hahaha = loadSound("hahaha.wav");
  cageSound = loadSound("cagedestroy.wav");
  happySong = loadSound("happysong.mp3")
  helpPrincessSong = loadSound("help-princess.wav");
}

function setup() {
 canvas = createCanvas(1525,700);
 engine = Engine.create();
 world = engine.world;

 hahaha.play();
 hahaha.setVolume(3);

 portal1 = createSprite(width-1423,height-119);
 portal1.addImage(tp1);
 portal1.scale = 0.50;
 portal1.setCollider("circle", 0,0,227);
 portal1.visible = true;

 portal2 = createSprite(width-150,height-119);
 portal2.addImage(tp2);
 portal2.scale = 0.50;
 portal2.setCollider("circle",0,0,227);

 jason = createSprite(762,1);
 jason.addAnimation("running", jasonRight);
 jason.scale = 0.60;
 jason.setCollider("rectangle",0,0,jason.width=90,jason.height=130);
 jason.visible = false;

 slime = createSprite(762,530);
 slime.addAnimation("running", monster);
 slime.scale = 7;
 slime.velocityX = -3;
 slime.setCollider("circle",0,0,16)

  saude = createSprite(45,35,40,40);
  saude.addImage(coracao);
  saude.scale = 0.4;

  saude1 = createSprite(82,35,40,40);
  saude1.addImage(coracao);
  saude1.scale = 0.4;

  saude2 = createSprite(119,35,40,40);
  saude2.addImage(coracao);
  saude2.scale = 0.4;

  saude3 = createSprite(156,35,40,40);
  saude3.addImage(coracao);
  saude3.scale = 0.4;

  saude4 = createSprite(193,35,40,40);
  saude4.addImage(coracao);
  saude4.scale = 0.4;

  love = createSprite(1150,500);
  love.addImage(loveImg);
  love.scale = 0.2;
  love.visible = false;

  jasonXmonster = createSprite(762,350);
  jasonXmonster.addImage(paper);
  jasonXmonster.visible = true;

  victory = createSprite(762,350);
  victory.addImage(victoryImg);
  victory.visible = false;

  play = createSprite(697,538,122,49);
  play.scale = 3
  play.visible = false;

  gameWin = createSprite(762,554,120,51)
  gameWin.scale = 2.9;
  gameWin.visible = false;

 invisibleGround1 = createSprite(763,664,1000000,70);
 invisibleGround1.visible = false;

 groundInvisible = createSprite(763,605,1525,1)
 groundInvisible.visible = false;

 ground = createSprite(width-763,height-320,420,50);
 ground.addImage("ground", solo);
 ground.setCollider("rectangle",0,0,ground.width=300, ground.height=40);
 ground.visible = false;

 tower = createSprite(width-1,317);
 tower.addImage(twImage);
 tower.scale = 0.8;
 tower.setCollider("rectangle",0,0,tower.width=125, tower.height=800);
 tower.visible = false;

 support = createSprite(1290,150)
 support.addImage(supportImg);
 support.scale = 1;
 support.setCollider("rectangle",0,0,support.width=470, support.height=50);
 support.visible = false;

 princessSad = createSprite(1180,95);
 princessSad.addImage(princessSadImg);
 princessSad.scale = 0.2;
 princessSad.velocityY = 0
 princessSad.visible = false;

 princessHappy = createSprite(1180,78);
 princessHappy.addImage(princessHappImg);
 princessHappy.scale = 0.22;
 princessHappy.velocityY = 0
 princessHappy.visible = false;

 cage = createSprite(1195,80);
 cage.addImage(prision);
 cage.scale = 0.5;
 cage.velocityY = 0
 cage.setCollider("rectangle",0,0,cage.width=260, cage.height=180)
 cage.visible = false;

 cageGround = createSprite(1195,123,120,1);
 cageGround.velocityY = 0
 cageGround.visible = false;
 
 invisibleGround3 = createSprite(99,630,155,10);
 invisibleGround3.visible = false;

 invisibleGround4 = createSprite(1405,630,200,10);
 invisibleGround4.visible = false;

 invisibleEdge1 = createSprite(1,350,2,700);
 invisibleEdge1.visible = false;

 edgePortal1 = createSprite(195,585,2,87);
 edgePortal1.visible = false;

 edgePortal2 = createSprite(1296,585,2,87);
 edgePortal2.visible = false;

 edgeVisible1 = createSprite(99,530,155,10)
 edgeVisible1.visible = false;
  
 edgeVisible2 = createSprite(1390,530,155,10)
 edgeVisible2.visible = false;

 invisible = createSprite(1190,190,100,2);
 invisible.visible = false;

 gameOverTittle = createSprite(761,210);
 gameOverTittle.addImage(gameOverImg);
 gameOverTittle.scale = 1.9;
 gameOverTittle.visible = false;

 restart = createSprite(761,325);
 restart.addImage(restartImg);
 restart.scale = 0.4
 restart.visible = false;

 upButton = createSprite(width-1390,height-147);
 upButton.addImage(upImg);
 upButton.scale = 0.4;
 upButton.setCollider("circle",0,0,80);

 downButton = createSprite(width-1390,height-47);
 downButton.addImage(downImg);
 downButton.scale = 0.4;
 downButton.setCollider("circle",0,0,80);

 rightButton = createSprite(width-1330,height-97);
 rightButton.addImage(rightImg);
 rightButton.scale = 0.4;
 rightButton.setCollider("circle",0,0,80);
 
 leftButton = createSprite(width-1455,height-97);
 leftButton.addImage(leftImg);
 leftButton.scale = 0.4;
 leftButton.setCollider("circle",0,0,80);

 zButton = createSprite(1325,600);
 zButton.addImage(zImg);
 zButton.scale = 1;
 zButton.setCollider("circle",0,0,48);

 xButton = createSprite(1430,605);
 xButton.addImage(xImg);
 xButton.scale = 1.4;
 xButton.setCollider("circle",0,0,35);

 portal2Invivisble = createSprite(1290,585,2,87)
 portal2Invivisble.visible = false; 

 player1V0 = createSprite(730,320,5,70);
 player1V0.visible = false;

 player2V0 = createSprite(800,320,5,70);
 player2V0.visible = false;

  jasonParado = createSprite(1120,590);
  jasonParado.addImage(coracao);
  jasonParado.scale = 0.60;
  jasonParado.visible = false;

  love = createSprite(1150,500);
  love.addImage(loveImg);
  love.scale = 0.2;
  love.visible = false;

 cloudsGroup = createGroup();
 laserGroup = createGroup();
 laserDGroup = createGroup();
 fireBallGroup = createGroup();
 }


function draw() {
   background(bg_Img,0,0,width,height);
   Engine.update(engine);

  if(gameState==="save") {
    
    textSize(20);
    fill("black")
    text("aperte espaço para destruir a torre da princesa e a salve. ",510,200);
    
    if(keyDown("space")) {
      laserD = createSprite(150, width/2, 50,20);
      laserD.y = jason.y-20;
      laserD.x = jason.x+59;
      laserD.addImage(laserDImg);
      laserD.scale = 0.9;
      laserD.velocityX = 10;
      laserD.velocityY = -10
      laserD.depth = jason.depth;
      laserD.depth = laserD.depth + 1
      laserDGroup.add(laserD);
      slime.destroy();
    }
      
  }

  if(cage.isTouching(invisibleGround1)) {
     cage.destroy();
     cageSound.play();  
  }

  if(cageGround.isTouching(invisibleGround1)) {
    princessSad.visible = false;
    princessHappy.visible = true;
    happySong.play();
    happySong.setVolume(10)
  }

  if(laserDGroup.isTouching(support)) {
    support.velocityY = 1000000000;
    cage.velocityY = 15;
    cageGround.velocityY = 15;
    princessSad.velocityY = 15;
    princessHappy.velocityY = 15;
    laserDGroup.destroyEach();
  }

  if(keyDown("up_arrow")&& jason.y >= 570) {
    jason.velocityY = -25;
    jump.play();
  }
  jason.velocityY = jason.velocityY +1;

  if(keyDown("down_arrow")) {
    jason.velocityY = 20;
  }
  
   if(keyDown("left_arrow")) {
    jason.x = jason.x -10;
    jason.addAnimation("running", jasonLeft);
    gameState = "play";
  }

  if(jason.isTouching(cage)) {
    jason.x = 1095;
    jason.y = 90;
  }

   if(keyDown("right_arrow")) {
    jason.x = jason.x +10;
    jason.addAnimation("running", jasonRight);
    gameState = "play";
  }

  if(slime.isTouching(portal2Invivisble)) {
    slime.velocityX = -15;
  }

  if(lifeJason===1 && jason.isTouching(slime)) {
    gameover.play();
  }

  if(lifeJason===0 && jason.isTouching(fireBallGroup)) {
    gameover.play();
  }

  if(lifeJason===1 && jason.isTouching(fireBallGroup)) {
    gameover.play();
  }

if(gameState==="play") {
  
    portal1.visible = true;
    laserGroup.visible = true;
  
  if(jason.isTouching(fireBallGroup)){
    jason.x = 1095;
    jason.y = 1;
    die.play();
    lifeJason=lifeJason-2;
  }

  if(jason.isTouching(slime)) {
    jason.x = 762;
    jason.y = 348;
    die.play();
    lifeJason=lifeJason-1;
  }

  if(jason.isTouching(cage)) {
    jason.x = 1095;
    jason.y = 90;
  }

  if(jason.isTouching(cageGround)) {
    love.visible = true;
    jason.addImage("running", coracao);
  }

  if(jason.visible===false) {
    portal1.visible = false
  }

  if(jason.isTouching(invisibleGround3)) {
    jason.x = 1423;
    jason.y = 580;
    jason.visible = false;
    jason.velocityY = -24;
  }

  if(jason.isTouching(invisibleGround4)) {
    jason.x = 99;
    jason.y = 580;
    jason.visible = false;
    jason.velocityY = -24;
  }

  if(jason.isTouching(edgeVisible1)||(edgeVisible2)) {
    jason.visible = true;
  }

  if(slime.isTouching(laserGroup)) {
    lifeMonster=lifeMonster-1;
  }
  
  if(slime.isTouching(portal1)) {
    slime.velocity.x = 15;
  }
  
  if(slime.isTouching(portal2)) {
    slime.velocity.x = -13;
  }  

  if(lifeMonster<=699 && slime.isTouching(portal2)) {
    roar.play();
  }
  
  if(jason.isTouching(princessHappy)) {
    victory.visible = true;
    tower.visible = false;
    victorySound.play();
    jasonParado.visible = true;
    jason.destroy();
    jump.stop();
    laserD.destroy();
  }

  if(lifeMonster<=250 && slime.isTouching(portal2)) {
    slime.velocityY = -10;
    slime.velocity.x = 0
  }

  if(lifeMonster<=500 && slime.isTouching(portal1)) {
    shoootFireBallR();
  }

  if(lifeMonster<=450 && slime.isTouching(portal2)) {
    shoootFireBallL();
  }

  if(lifeMonster===600) {
    helpPrincessSong.play();
    portal2Invivisble.destroy();
  }
  
  if(lifeMonster===90) {
    helpPrincessSong.play();
  }

  if(slime.isTouching(invisible)) {
    slime.velocityY = +10;
    shoootFireBallL(); 
  }

  if(fireBallGroup.isTouching(ground)) {
    ground.destroy();
  }
}
if(gameState==="play") {
 if(keyWentDown("z")) {
  shooting.play();
  laser = createSprite(150, width/2, 50,20);
  laser.y = jason.y+10;
  laser.x = jason.x-59;
  laser.addImage(laserImg);
  laser.scale = 0.9;
  laser.velocityX = -15;
  laser.depth = jason.depth;
  laser.depth = laser.depth + 10
  laserGroup.add(laser);
 }
 if(keyWentDown("x")) {
  shooting.play();
  laser = createSprite(150, width/2, 50,20);
  laser.y = jason.y+10;
  laser.x = jason.x+59;
  laser.addImage(laserImg);
  laser.scale = 0.9;
  laser.velocityX = 15;
  laser.depth = jason.depth;
  laser.depth = laser.depth + 10
  laserGroup.add(laser);
 }
}
 if(lifeJason===5){
  saude.visible = true;
  saude1.visible = true;
  saude2.visible = true;
  saude3.visible = true;
  saude4.visible = true;
}

if(lifeJason===4){
  saude.visible = true;
  saude1.visible = true;
  saude2.visible = true;
  saude3.visible = true;
  saude4.visible = false;
}

if(lifeJason===3){
  saude.visible = true;
  saude1.visible = true;
  saude2.visible = true;
  saude3.visible = false;
  saude4.visible = false;
}

if(lifeJason===2){
  saude.visible = true;
  saude1.visible = true;
  saude2.visible = false;
  saude3.visible = false;
  saude4.visible = false;
}

if(lifeJason===1){
  saude.visible = true;
  saude1.visible = false;
  saude2.visible = false;
  saude3.visible = false;
  saude4.visible = false;
}

if(lifeJason===0) {
  saude.visible = false;
  jason.destroy();
  slime.velocityX = 0;
  gameState = "end";
  slime.addImage("running", monsterV0);
  slime.velocityY = 0;
  laserGroup.destroyEach();
  shooting.pause();
  gameOverTittle.visible = true;
  restart.visible = true;
  portal1.destroy();
  portal2.destroy();
}

if(lifeJason===-1) {
  saude.visible = false;
  jason.destroy();
  slime.velocityX = 0;
  slime.velocityY = 0;
  gameState = "end";
  slime.addImage("running", monsterV0);
  laserGroup.destroyEach();
  shooting.pause();
  gameOverTittle.visible = true;
  restart.visible = true;
  portal1.destroy();
  portal2.destroy();
}

if(lifeMonster===0) {
  slime.addImage("running", monsterDead);
  slime.velocityX = 0;
  slime.velocityY = 0;
  laserGroup.destroyEach();
  shooting.pause();
  gameState = "save";
}

if(mousePressedOver(restart)) {
  gameOverTittle.visible = false;
  restart.destroy();
  gameState = "play";
}

if(slime.isTouching(portal1)) {
  slime.velocity.x = 15;
}

spawnClouds();

 cloudsGroup.setLifetimeEach(-1);

 cloudsGroup.setVelocityXEach(-4);

jason.collide(invisibleGround1);
jason.collide(ground);
jason.collide(invisibleEdge1);
jason.collide(edgePortal1);
jason.collide(edgePortal2);
jason.collide(tower);
jason.collide(cage);
jason.collide(princessHappy);
jason.collide(support);
jason.collide(player1V0);
jason.collide(player2V0);
cage.collide(tower);
cage.collide(invisibleGround1);
cageGround.collide(invisibleGround1);
cage.collide(support);
cageGround.collide(support);
princessSad.collide(cageGround);
princessHappy.collide(cageGround);
princessHappy.collide(invisibleGround1);
princessHappy.collide(portal1);
princessHappy.collide(portal2);
princessHappy.collide(ground);

if(mousePressedOver(play)) {
  jason.visible = true;
  ground.visible = true;
  tower.visible = true;
  princessSad.visible = true;
  cage.visible = true;
  support.visible = true;
  jasonXmonster.visible = false;
  hahaha.pause();
  //bg_sound.play();
  player1V0.destroy();
  player2V0.destroy();
}
if(gameState==="serve") {
 
  
  jason.visible = true;
  jason.addImage("running", coracao);
  shooting.pause();
  laserGroup.visible = false;
  jump.pause();
  roar.pause();
  helpPrincessSong.pause();

  
  textSize(20);
   fill('black')
  text("Use as setas para se mover, ",640,120);
  
  textSize(20);
  fill('black')
  text("aperte Z para atirar para esquerda e",600,145);
  
  textSize(20);
  fill('black')
  text("aperte X para atirar para direita !!",620,170);

  textSize(20);
  fill('red');
  text("vidas:"+lifeJason,-65,100)
}
 
/*if(gameState==="end") {
  gameover.play();
  gameover.setVolume(1);
}*/
   
  drawSprites()
}

function spawnClouds() {
  if(gameState==="play") {
  //código para gerar as nuvens
  if (frameCount % 60 === 0) {
     cloud = createSprite(1590,250,40,10);
    cloud.y = Math.round(random(50,200));
    cloud.addImage(cloudImg);
    cloud.scale = 2;
    cloud.velocityX = -10;
    
     //atribuir tempo de vida à variável
    cloud.lifetime = 900;
    
    //ajustar a profundidade
    cloud.depth = jason.depth;
    jason.depth = jason.depth + 1;
    
    //adicionando nuvem ao grupo
   cloudsGroup.add(cloud);
  }
}
}

function shoootFireBallL() {
  
  fireBall = createSprite(150,width/2, 50,20);
  fireBall.x = slime.x+1;
  fireBall.y = slime.y+50;
  fireBall.addImage(fireBallImg);
  fireBall.scale = 0.9;
  fireBall.velocityX = -19;
  fireBallGroup.add(fireBall);
}

function shoootFireBallR() {
  
  fireBall = createSprite(150,width/2, 50,20);
  fireBall.x = slime.x+1;
  fireBall.y = slime.y+50;
  fireBall.addImage(fireBallImg);
  fireBall.scale = 0.9;
  fireBall.velocityX = 19;
  fireBallGroup.add(fireBall);
}

function reset() {
  gameState = "play";
  gameOverTittle.visible = false;
  restart.visible = false;
  jason.changeAnimation("running", jasonRight);
}

function showLifeMonster() {
  push();
  image(monsterV0, width / 2 - 130, height - laser.positionY - 350, 20, 20);
  fill("black");
  rect(width / 2 - 100, height - laser.positionY - 350, 185, 20);
  fill("green");
  rect(width / 2 - 100, height - laser.positionY - 350, laser.lifeMonster, 20);
  noStroke();
  pop();
}

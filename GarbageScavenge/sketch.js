// variables
var level = 'c';
var coBin = false;
var rsBin = false;
var haBin = false;
var money = 0;
var add = 0;
var once = 0;
var score = 0;
var highScore = 0;



//logo variable
var cover,cover_load;

var comp_bin_sprite;

function preload() {
  //cover = loadImage('./screens/Cover.png');
  // https://editor.p5js.org/kjhollen/sketches/S1bVzeF8Z
  //start_button_image = loadImage('./images/start_button.png')
  welcome = loadImage('./screens/Welcome.png');
  menu = loadImage('./screens/Menu.png');
  game = loadImage('./screens/Game.png'); 
  instructions = loadImage('./screens/Instructions.png');
  shop = loadImage('./screens/Shop.png');
  shop_recy = loadImage('./screens/Shop_Recy.png');
  shop_comp0 = loadImage('./screens/Shop_Comp0.png');
  shop_comp1 = loadImage('./screens/Shop_Comp1.png');
  shop_resi_1 = loadImage('./screens/Shop_Resi_1.png');
  shop_resi0 = loadImage('./screens/Shop_Resi0.png');
  shop_resi1 = loadImage('./screens/Shop_Resi1.png');
  shop_harz_1 = loadImage('./screens/Shop_Harz_1.png');
  shop_harz0 = loadImage('./screens/Shop_Harz0.png');
  shop_harz1 = loadImage('./screens/Shop_Harz1.png');
  recy_info = loadImage('./screens/info/RecyInfo.png');
  comp_info = loadImage('./screens/info/CompInfo.png');
  resi_info = loadImage('./screens/info/ResiInfo.png');
  harz_info = loadImage('./screens/info/HarzInfo.png');
  game_over = loadImage('./dump/game_over.png');
  coin = loadImage('./dump/coin.png');
  trophy = loadImage('./dump/trophy.png');
  
  
  //trash images
  recy1_img = loadImage('./sprites/recycling/recy1.png');
  recy2_img = loadImage('./sprites/recycling/recy2.png');
  recy3_img = loadImage('./sprites/recycling/recy3.png');
  recy4_img = loadImage('./sprites/recycling/recy4.png');
  // recy5_img = loadImage('./sprites/recycling/recy5.png');
  
  comp1_img = loadImage('./sprites/compost/comp1.png');
  comp2_img = loadImage('./sprites/compost/comp2.png');
  comp3_img = loadImage('./sprites/compost/comp3.png');
  comp4_img = loadImage('./sprites/compost/comp4.png');
  
  harz1_img = loadImage('./sprites/hazardous/harz1.png');
  harz2_img = loadImage('./sprites/hazardous/harz2.png');
  harz3_img = loadImage('./sprites/hazardous/harz3.png');
  harz4_img = loadImage('./sprites/hazardous/harz4.png');
  // harz5_img = loadImage('./sprites/hazardous/harz5.png');
  // harz6_img = loadImage('./sprites/hazardous/harz6.png');
  
  resi1_img = loadImage('./sprites/residual/resi1.png');
  resi2_img = loadImage('./sprites/residual/resi2.png');
  resi3_img = loadImage('./sprites/residual/resi3.png');
  resi4_img = loadImage('./sprites/residual/resi4.png');
  resi5_img = loadImage('./sprites/residual/resi5.png');
  // resi6_img = loadImage('./sprites/residual/resi6.png');
  // resi7_img = loadImage('./sprites/residual/resi7.png');
  // resi8_img = loadImage('./sprites/residual/resi8.png');

  //bins
  comp_bin_img = loadImage('./sprites/bins/comp_bin.png');
  harz_bin_img = loadImage('./sprites/bins/harz_bin.png');
  recy_bin_img = loadImage('./sprites/bins/recy_bin.png');
  resi_bin_img = loadImage('./sprites/bins/resi_bin.png');

  //logo
  cover_load = loadImage('./screens/Cover_Gif.gif');
  cover = createImg('./screens/Cover_Gif.gif');
  
}

function setup() {
  //create the Canvas
  createCanvas(1920, 1080);
  start_button = createImg('./buttons/start_button.png');
  start_button.position(780,790);
  start_button.mousePressed(welcomeScreen);
  //start_button.resize(194,144);
  
  cont_button = createImg('./buttons/cont_button.png');
  cont_button.position(755,780);
  cont_button.hide();
  cont_button.mousePressed(menuScreen);

  // make shop button
  shop_button = createImg('./buttons/menu_shop_button.png');
  shop_button.position(1160,900);
  shop_button.hide();
  shop_button.mousePressed(shopScreen);

  // make info button
  info_button = createImg('./buttons/menu_info_button.png');
  info_button.position(560,900); 
  info_button.hide();
  info_button.mousePressed(infoScreen);

  // make return button
  returnToMenu_button = createImg('./buttons/return_menu_button.png');
  returnToMenu_button.position(165,90); 
  returnToMenu_button.hide();
  returnToMenu_button.mousePressed(menuScreen);

  // make play button
  playGame_button = createImg('./buttons/play_button.png');
  playGame_button.position(750,200);
  playGame_button.hide();
  playGame_button.mousePressed(gameScreen);

  // make shop trash info buttons
  recyInfo_button = createImg('./buttons/shop buttons/recy_info.png')
  recyInfo_button.position(420,810); // CHANGE POS
  recyInfo_button.hide()
  recyInfo_button.mousePressed(infoRecycling);
  compInfo_button = createImg('./buttons/shop buttons/comp_info.png')
  compInfo_button.position(810,810); // CHANGE POS
  compInfo_button.hide()
  compInfo_button.mousePressed(infoCompost);
  resiInfo_button = createImg('./buttons/shop buttons/resi_info.png')
  resiInfo_button.position(1200,810); // CHANGE POS
  resiInfo_button.hide()
  resiInfo_button.mousePressed(infoResidual);
  harzInfo_button = createImg('./buttons/shop buttons/harz_info.png')
  harzInfo_button.position(1590,810); // CHANGE POS
  harzInfo_button.hide()
  harzInfo_button.mousePressed(infoHazardous);

  //buy bins buttons
  compBuy_button = createImg('./buttons/shop buttons/comp_buy_button.png');
  compBuy_button.position(600,600); // CHANGE POS
  compBuy_button.hide();
  //compBuy_button.mousePressed(check_valid(5));
  compBuy_button.mousePressed(check_valid_comp);
  resiBuy_button = createImg('./buttons/shop buttons/resi_buy_button.png')
  resiBuy_button.position(980,600); // CHANGE POS
  resiBuy_button.hide();
  //resiBuy_button.mousePressed(check_valid(10));
  resiBuy_button.mousePressed(check_valid_resi);
  harzBuy_button = createImg('./buttons/shop buttons/harz_buy_button.png')
  harzBuy_button.position(1360,600); // CHANGE POS
  harzBuy_button.hide();
  //harzBuy_button.mousePressed(check_valid(20));
  harzBuy_button.mousePressed(check_valid_harz);


  // make return to shop button
  returnToShop_button = createImg('./buttons/return_menu_button.png');
  returnToShop_button.position(165,90);
  returnToShop_button.hide();
  returnToShop_button.mousePressed(shopScreen);
  
  // trash
  // comp_bin_sprite = createSprite(x,-50);
  // comp_bin_sprite.addAnimation('bin', comp_bin_img);
  
  //var randX = int(random(100,1820))
  
  recy_sprite = createSprite(int(random(100,1820)),-100);  
  recy_sprite.addAnimation('1', recy1_img);
  recy_sprite.addAnimation('2', recy2_img);  
  recy_sprite.addAnimation('3', recy3_img);
  recy_sprite.addAnimation('4', recy4_img);  
  recy_sprite.scale = 0.5;
  recy_sprite.changeAnimation(str(int(random(1,5))));

  resi_sprite = createSprite(int(random(100,1820)),-300);
  resi_sprite.addAnimation('1', resi1_img);
  resi_sprite.addAnimation('2', resi2_img);  
  resi_sprite.addAnimation('3', resi3_img);
  resi_sprite.addAnimation('4', resi4_img);  
  resi_sprite.scale = 0.5;
  resi_sprite.changeAnimation(str(int(random(1,5))));
  
  harz_sprite = createSprite(int(random(100,1820)),-500);
  harz_sprite.addAnimation('1', harz1_img);
  harz_sprite.addAnimation('2', harz2_img);  
  harz_sprite.addAnimation('3', harz3_img);
  harz_sprite.addAnimation('4', harz4_img);  
  harz_sprite.scale = 0.5;
  harz_sprite.changeAnimation(str(int(random(1,5))));
  
  comp_sprite = createSprite(int(random(100,1820)),-700);
  comp_sprite.addAnimation('1', comp1_img);
  comp_sprite.addAnimation('2', comp2_img);  
  comp_sprite.addAnimation('3', comp3_img);
  comp_sprite.addAnimation('4', comp4_img);  
  comp_sprite.scale = 0.5;
  comp_sprite.changeAnimation(str(int(random(1,5))));

  //bins
  comp_bin_sprite = createSprite(773,990);
  comp_bin_sprite.addAnimation('bin', comp_bin_img);
  harz_bin_sprite = createSprite(400,990);
  harz_bin_sprite.addAnimation('bin', harz_bin_img);
  recy_bin_sprite = createSprite(1146,990);
  recy_bin_sprite.addAnimation('bin', recy_bin_img);
  resi_bin_sprite = createSprite(1520,990);
  resi_bin_sprite.addAnimation('bin', resi_bin_img);

  binsGroup = [recy_bin_sprite, comp_bin_sprite, resi_bin_sprite, harz_bin_sprite];

  trashGroup = [recy_sprite, comp_sprite, resi_sprite, harz_sprite];
  // create mouse sprite
  mouseSprite = createSprite(mouseX, mouseY, 10, 10);
  mouseSprite.shapeColor = color(255, 0, 0, 0); //make it transparent
}

function coverScreen() {
  cover.position(0,0);
}

function welcomeScreen() {
  level = 'w';
  start_button.remove()
  cover.remove();
  image(welcome,0,0);
  cont_button.show();
}

function menuScreen() {
  level = 'm';
  cont_button.remove();
  image(menu,0,0);
  info_button.show();
  shop_button.show();
  playGame_button.show();
  returnToMenu_button.hide();
  recyInfo_button.hide();
  compInfo_button.hide();
  resiInfo_button.hide();
  harzInfo_button.hide();
  compBuy_button.hide();
  harzBuy_button.hide();
  resiBuy_button.hide();
  once = 0;
  add = 0;
  score = 0;
  textAlign(RIGHT, CENTER);
  fill(255, 255, 255);
  textSize(50);
  image(trophy, 1820,20);
  trophy.resize(75,75);
  text(highScore, 1800, 50);
  image(coin, 1820,110)
  coin.resize(75,75);
  text(money, 1800, 150);
  // show shop, start game, info buttons
}

function shopScreen() {
  //show back, upgrade, buy, info for bin buttons
  level = 's';
  returnToMenu_button.position(165,90);
  returnToMenu_button.show();
  shop_button.hide();
  info_button.hide();
  returnToShop_button.hide();
  recyInfo_button.show();
  compInfo_button.show();
  resiInfo_button.show();
  harzInfo_button.show();
  image(shop,0,0);
  image(shop_recy,0,0);
  playGame_button.hide();
  textAlign(RIGHT, CENTER);
  image(coin, 1610,120);
  textSize(50);
  text(money, 1590, 160);
  //when compost bin is bought
  if (haBin == true) {
    harzBuy_button.hide(); 
    resiBuy_button.hide(); 
    compBuy_button.hide();
    image(shop_harz1,0,0);
    image(shop_resi1,0,0);
    image(shop_comp1,0,0);
  }  
  else if (rsBin == true){
    image(shop_harz0,0,0);
    harzBuy_button.show();
    resiBuy_button.hide();
    compBuy_button.hide();
    image(shop_resi1,0,0);
    image(shop_comp1,0,0);
  }
  else if (coBin == true){
    image(shop_resi0,0,0);
    resiBuy_button.show();
    compBuy_button.hide();
    image(shop_comp1,0,0);
    image(shop_harz_1,0,0);
  }
  else{ 
    compBuy_button.show();
    image(shop_comp0,0,0);
    image(shop_resi_1,0,0);
    image(shop_harz_1,0,0);
  }
}
function check_valid_comp(){
  level = "compBuy";
  //check if purchase is valid
  if (money>=5) {
    money=money-5;
      coBin = true;
      image(shop_comp1,0,0);
  }
  else {
    textAlign(CENTER, CENTER);
    fill(255, 255, 255);
    textSize(50);
    text("Not enough money :( need " + 5-money + " more coins", 960,510);
    var time = 0;
    while (time<300){
      time++;
    }
  }

  level = 's';
}

function check_valid_resi(){
  level = "resiBuy";
  //check if purchase is valid
  if (money>=10) {
    money=money-10;
    rsBin = true;
    image(shop_resi1,0,0);
  }
  else {
    textAlign(CENTER, CENTER);
    fill(255, 255, 255);
    textSize(50);
    text("Not enough money :( need " + 5-money + " more coins", 960,510);
    var time = 0;
    while (time<300){
      time++;
    }
  }
  level = 's';
}

function check_valid_harz(){
  level = 'harzBuy';
  //check if purchase is valid
  if (money>=20) {
    money=money-20;
    haBin = true;
    image(shop_harz1,0,0);
  }
  else {
    textAlign(CENTER, CENTER);
    fill(255, 255, 255);
    textSize(50);
    text("Not enough money :( need " + 5-money + " more coins", 960,510);
    var time = 0;
    while (time<300){
      time++;
    }
  }
  level = 's';
}

function infoScreen() {
  // info screen!!!
  level = 'i';
  returnToMenu_button.position(165,90);
  returnToMenu_button.show()
  image(instructions,0,0);  
  playGame_button.hide();
  shop_button.hide();
  info_button.hide();
  compBuy_button.hide()
  harzBuy_button.hide()
  resiBuy_button.hide()
}

function infoRecycling() {
  //show back button
  level = 'iRec';
  image(recy_info,0,0)
  returnToShop_button.show()
  recyInfo_button.hide()
  compInfo_button.hide()
  resiInfo_button.hide()
  harzInfo_button.hide()
  compBuy_button.hide()
  harzBuy_button.hide()
  resiBuy_button.hide()
}

function infoCompost() {
  //shop back button
  level = 'iCom';
  image(comp_info,0,0)
  returnToShop_button.show()
  recyInfo_button.hide()
  compInfo_button.hide()
  resiInfo_button.hide()
  harzInfo_button.hide()
  compBuy_button.hide()
  harzBuy_button.hide()
  resiBuy_button.hide()
}

function infoResidual() {
  //shop back button
  level = 'iRes';
  image(resi_info,0,0)
  returnToShop_button.show()
  recyInfo_button.hide()
  compInfo_button.hide()
  resiInfo_button.hide()
  harzInfo_button.hide()
  compBuy_button.hide()
  harzBuy_button.hide()
  resiBuy_button.hide()
}

function infoHazardous() {
  //shop back button
  level = 'iHaz';
  image(harz_info,0,0)
  returnToShop_button.show()
  recyInfo_button.hide()
  compInfo_button.hide()
  resiInfo_button.hide()
  harzInfo_button.hide()
  compBuy_button.hide()
  harzBuy_button.hide()
  resiBuy_button.hide()
}

function gameScreen() {
  // GAME
  score++;

  
  if (once == 0) {
    recy_sprite.position.x = int(random(100,1820));
    recy_sprite.position.y = -100;
    if (haBin==true) {
      recy_bin_sprite.position.x = 400;
      recy_bin_sprite.position.y = 990;
      comp_bin_sprite.position.x = 773;
      comp_bin_sprite.position.y = 990;
      resi_bin_sprite.position.x = 1146;
      resi_bin_sprite.position.y = 990;
      harz_bin_sprite.position.x = 1520;
      harz_bin_sprite.position.y = 990;
    } else if (rsBin==true) {
      recy_bin_sprite.position.x = 537;
      recy_bin_sprite.position.y = 990;
      comp_bin_sprite.position.x = 910;
      comp_bin_sprite.position.y = 990;
      resi_bin_sprite.position.x = 1283;
      resi_bin_sprite.position.y = 990;
      harz_bin_sprite.position.x = -500;
      harz_bin_sprite.position.y = -500;
    } else if (coBin==true) {
      recy_bin_sprite.position.x = 724;
      recy_bin_sprite.position.y = 990;
      comp_bin_sprite.position.x = 1271;
      comp_bin_sprite.position.y = 990;
      resi_bin_sprite.position.x = -500;
      resi_bin_sprite.position.y = -500;
      harz_bin_sprite.position.x = -500;
      harz_bin_sprite.position.y = -500;
    } else {
      recy_bin_sprite.position.x = 910;
      recy_bin_sprite.position.y = 990;
      comp_bin_sprite.position.x = -500;
      comp_bin_sprite.position.y = -500;
      resi_bin_sprite.position.x = -500;
      resi_bin_sprite.position.y = -500;
      harz_bin_sprite.position.x = -500;
      harz_bin_sprite.position.y = -500;
    }
    
    recy_sprite.position.x = int(random(100,1820));
    recy_sprite.position.y = -700;
    comp_sprite.position.x = int(random(100,1820));
    comp_sprite.position.y = -300;
    resi_sprite.position.x = int(random(100,1820));
    resi_sprite.position.y = -500;
    harz_sprite.position.x = int(random(100,1820));
    harz_sprite.position.y = -100;
    once++;
  }
  
  mouseSprite.position.x = mouseX;
  mouseSprite.position.y = mouseY;
  playGame_button.hide();
  shop_button.hide();
  info_button.hide();
  compBuy_button.hide();
  harzBuy_button.hide();
  resiBuy_button.hide();
  level = 'GAME';
  image(game,0,0);  
  drawSprites();
  recy_sprite.position.y += 2;
  comp_sprite.position.y += 2;
  resi_sprite.position.y += 2;
  harz_sprite.position.y += 2;
  returnToMenu_button.position(30,25);
  returnToMenu_button.show();


  if (recy_sprite.collide(binsGroup[0])) {
    j = int(random(1,5));
    j = str(j);
    recy_sprite.changeAnimation(j);
    recy_sprite.position.x = int(random(100,1820));
    recy_sprite.position.y = int(random(-100, -10));
    add ++;
  }
  if (comp_sprite.collide(binsGroup[1])) {
    j = int(random(1,5));
    j = str(j);
    comp_sprite.changeAnimation(j);
    comp_sprite.position.x = int(random(100,1820));
    comp_sprite.position.y = int(random(-100, -10));
    add ++;    
  }
  if (resi_sprite.collide(binsGroup[2])) {
    j = int(random(1,5));
    j = str(j);
    resi_sprite.changeAnimation(j);
    resi_sprite.position.x = int(random(100,1820));
    resi_sprite.position.y = int(random(-100, -10));
    add ++;    
  }
  if (harz_sprite.collide(binsGroup[3])) {
    j = int(random(1,5));
    j = str(j);
    harz_sprite.changeAnimation(j);
    harz_sprite.position.x = int(random(100,1820));
    harz_sprite.position.y = int(random(-100, -10));
    add ++;    
  }

  for (var i = 0; i<4; i++) {
    if ((recy_sprite.collide(binsGroup[i])) && (i!=0)) {
      level = 'gameOver';    
    }
    if ((comp_sprite.collide(binsGroup[i])) && (i!=1)) {
      level = 'gameOver';    
    }
    if ((resi_sprite.collide(binsGroup[i])) && (i!=2)) {
      level = 'gameOver';    
    }
    if ((harz_sprite.collide(binsGroup[i])) && (i!=3)) {
      level = 'gameOver';    
    }

    
    if (recy_sprite.position.y > 1280) {
      j = int(random(1,5));
      j = str(j);
      recy_sprite.changeAnimation(j);
      recy_sprite.position.x = int(random(100,1820));
      recy_sprite.position.y = int(random(-100, -10));
    }
    if (comp_sprite.position.y > 1280) {
      j = int(random(1,5));
      j = str(j);
      comp_sprite.changeAnimation(j);
      comp_sprite.position.x = int(random(100,1820));
      comp_sprite.position.y = int(random(-100, -10));
    }
    if (resi_sprite.position.y > 1280) {
      j = int(random(1,5));
      j = str(j);
      resi_sprite.changeAnimation(j);
      resi_sprite.position.x = int(random(100,1820));
      resi_sprite.position.y = int(random(-100, -10));
    }
    if (harz_sprite.position.y > 1280) {
      j = int(random(1,5));
      j = str(j);
      harz_sprite.changeAnimation(j);
      harz_sprite.position.x = int(random(100,1820));
      harz_sprite.position.y = int(random(-100, -10));
    }
  }
  textAlign(RIGHT, CENTER);
  fill(255, 255, 255);
  textSize(50);
  text("High Score: " + highScore, 1900, 50);
  text("Your Score: " + Math.floor(score / 60), 1900, 150); 
  text("Coins: " + add, 1900, 250);
}

function gameOver() {
  image(game,0,0);
  image(game_over,0,0);
  textAlign(CENTER, CENTER);
  fill(201, 131, 131);
  textSize(50);
  text("High Score: " + highScore, 960, 650);
  text("Your Score: " + Math.floor(score / 60), 960, 750); 
  returnToMenu_button.position(30,25);
  returnToMenu_button.show();
  for (var i = 0; i < 4; i++){
    binsGroup[i].position.x = 0;
    trashGroup[i].position.y = 3000;
    trashGroup[i].position.x = 0;
    trashGroup[i].position.y = -1000;  
  }
  
  if (Math.floor(score / 60) > highScore) {
    highScore = Math.floor(score / 60);
  }
  if (add != 0) {
    money += add;
    add = 0;
  }
}

function draw() {  
  if (level == 'c') coverScreen();
  else if (level == 'w') welcomeScreen();
  else if (level == 'm') menuScreen();
  else if (level == 'i') infoScreen();
  else if (level == 's') shopScreen();
  else if (level == 'GAME') gameScreen();
  else if (level == 'iRec') infoRecycling();
  else if (level == 'iCom') infoCompost();
  else if (level == 'iRes') infoResidual();
  else if (level == 'iHaz') infoHazardous();
  else if (level == 'gameOver') gameOver();
  else if (level == 'compBuy') check_valid_comp();
  else if (level == 'resiBuy') check_valid_resi();
  else if (level == 'harzBuy') check_valid_harz();


//  image(start_button,0,0)
  //Put your code below
  //else if (screen=="intro game") { // change str value it's bad rn
  //  image(welcome, 0, 0); 
  //}
  // logo_createImg.position(50, 350);
}

function mouseDragged() {
  for(var i = 0; i<4; i++){
    if (mouseSprite.collide(trashGroup[i])){
    trashGroup[i].position.x = mouseX;
    trashGroup[i].position.y = mouseY;
    }
  }
}
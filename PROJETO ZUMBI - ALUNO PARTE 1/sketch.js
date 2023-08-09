var bg, bgImg;
var player, shooterImg, shooter_shooting;
var zumbiImg, zumbi;
var p1, np1;


function preload(){

  bgImg = loadImage("assets/bg.jpeg")
  
  shooterImg = loadImage("assets/shooter_2.png")

  shooter_shooting = loadImage("assets/shooter_3.png");

  //PRÉ-CARREGAR IMAGEM DO ZUMBI
  

  //PRÉ CARREGAR NOVO PLAYER
 

 

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

  //criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)


  //AULA 45 - CRIAR O ZUMBI
  

  //AULA 45 - CRIAR NOVO PERSONAGEM
 

}

function draw() {
  background(0); 

  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y = player.y+30
  }


  //solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
  if(keyWentDown("space")){
 
    player.addImage(shooter_shooting)
    //AULA 45 - FAZ O ZUMBI ANDAR
    zumbi.velocityX = -2;
 
  }

  //o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
    
    //AULA 45 - FAZ O ZUMBI PARAR DE ANDAR
   
  }

  //AULA 45 - CONDIÇÃO PARA O PLAYER VIRAR ZUMBI E MUDAR DE POSIÇÃO, ALÉM DE ANDAR AUTOMATICAMENTE, E INSERIR NOVO PERSONAGEM
  

  drawSprites();

}

//AULA 45 - DECOMPOSIÇÃO DO JOGO
/*
1 - INSERIR ZUMBI
2 - CASO O JOGADOR APONTE PARA O ZUMBI ELE ANDA NA DIREÇÃO DELE
3 - CASO O JOGADOR NÃO APONTE MAIS, ELE IRÁ PARAR. 
4 - FAZER COLISÃO ENTRE O JOGADOR E CRIAR NOVO ZUMBI
5 - FAZER O NOVO ZUMBI ANDAR AUTOMATICAMENTE
6 - COLOCAR NOVO PERSONAGEM NO LUGAR
*/
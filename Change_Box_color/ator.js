//VARIAVEIS PERSONA
let yAtor = 600;
let xAtor = 400;
let cor=1;
let vida = 5;

function mostraAtor(){
  
// SISTEMA DE TROCA DE CORES
    image(imgPersona, xAtor, yAtor, 50, 50);
   if (keyIsDown(81)){ //CÓDIGO 81= TECLA Q
     imgPersona= loadImage("imagens/lixeiraVermelha.png");
      cor= 1;
   }
     if (keyIsDown(87)){ //CÓDIGO 87= TECLA W
     imgPersona= loadImage("imagens/lixeiraVerde.png");
      cor=2;
   }
    if (keyIsDown(69)){ //CÓDIGO 69= TECLA E
     imgPersona= loadImage("imagens/lixeiraAzul.png");
      cor=3;
   }
  if (keyIsDown(82)){ //CÓDIGO 82= TECLA R
     imgPersona= loadImage("imagens/lixeiraAmarela.png");
      cor=4;
   }
}

function movimentaAtor(){
//MOVIMENTO DO ATOR
  if (keyIsDown(LEFT_ARROW)){ //SETA PARA ESQUERDA
    xAtor-=7;
   }
  if (keyIsDown(RIGHT_ARROW)){ // SETA PARA A DIREITA 
    xAtor+=7;
  } 
}

function mostraVida(){
  fill(255, 0,0);
  text(vida, 780, 25);
  textAlign(CENTER);
  textSize(25);
  
}

function mostraCura(){
  fill(255, 0,0);
  text(cura, 710, 25);
  textAlign(CENTER);
  textSize(25);
  image(imgCura,670, 2, 25, 27);
}
function iconeVida(){
  image(imgVida, 745, 2, 25, 27);
}
function gameOver(){
  if(vida<=0){
    xAtor=400;
    imgPersona= loadImage("imagens/lixeiraVermelha.png");
    cor=1;
    vida=5;
    pontos=0;
    ySacola = -200;
    yGarrafa = -100;
    yPapel= -60;
    yLata= -220;
    cura=0;
  }
}

let imgAmbiente;
let imgPersona;
let imgGarrafaDeVidro;
let imgPapel;
let imgPlastico;
let imgMetal;
let imgVida;
let imgCura;
function setup() {
  createCanvas(800, 800);
}

function preload (){
  imgAmbiente = loadImage("imagens/ambiente.jpg");
  imgPersona = loadImage("imagens/lixeiraVermelha.png");
  imgVida = loadImage("imagens/vida.png");
  imgCura= loadImage("imagens/cura.png");
  loadImage("imagens/lixeiraVerde.png");
  loadImage("imagens/lixeiraAzul.png");
  loadImage("imagens/lixeiraAmarela.png");
  imgGarrafaDeVidro = loadImage("imagens/garrafa.png");
  imgPapel= loadImage("imagens/papel.png");
  imgPlastico = loadImage("imagens/sacola.png");
  imgMetal = loadImage ("imagens/lata.png");
}

function draw() {
  background(imgAmbiente);
  mostraAtor();
  iconeVida();
  mostraCura();
  damage();
  gameOver();
  mostraVida();
  movimentaAtor();
  contaPontos();
  mostraGarrafa();
  mostraPapel();
  mostraSacola();
  mostraLata();
  contato();
}
//GARRAFA DE VIDRO
let yGarrafa = -90;
let xGarrafa = Math.floor(Math.random()*710)+50;
function mostraGarrafa(){
  image(imgGarrafaDeVidro, xGarrafa, yGarrafa, 40, 50);
  yGarrafa +=Math.floor(Math.random()*3)+1;
}


// PAPEL
let yPapel= -60;
let xPapel= Math.floor(Math.random()*710)+50;
function mostraPapel(){
  
  image(imgPapel, xPapel, yPapel, 30, 40);
  yPapel+=Math.floor(Math.random()*3)+1;
}



//SACOLA
let xSacola = Math.floor(Math.random()*710)+50;
let ySacola = -200;
function mostraSacola(){
  image(imgPlastico, xSacola, ySacola, 40, 50);
  ySacola+=Math.floor(Math.random()*3)+1;
}


//METAL
let yLata= -220;
let xLata= Math.floor(Math.random()*710)+50;
function mostraLata(){
  image(imgMetal, xLata, yLata, 40, 40);
  yLata+=Math.floor(Math.random()*3)+1;
}

//DECLARAÇÃO DE VARIAVEL

 let rangePersona;
 let rangeSacola;
 let rangeGarrafa;
 let rangePapel;
 let rangeLata;
 let alturaAtor;
 let cura= 0;
function contato(){
  
//ATRIBUIÇÃO DE VALORES
  
  rangePersona = xAtor+50;
  rangeSacola= xSacola+15;
  rangeGarrafa= xGarrafa+20;
  rangePapel= xPapel+20;
  rangeLata= xLata+20;
  alturaAtor=yAtor + 25;
//SACOLA
  if(ySacola>=yAtor && ySacola<=alturaAtor){
      if(rangeSacola >= xAtor && rangeSacola <= rangePersona){
        if(cor==1){
            pontos +=1;
            cura+=1
            ySacola = -200;
            xSacola= Math.floor(Math.random()*710)+50;
          }
        }
      }
  
//GARRAFA
  if(yGarrafa>=yAtor && yGarrafa<=alturaAtor){
      if(rangeGarrafa >= xAtor && rangeGarrafa <= rangePersona){
        if(cor==2){
            pontos +=1;
            cura+=1
            yGarrafa = -100;
            xGarrafa= Math.floor(Math.random()*710)+50;
          }
        }
      }

//PAPEL
  if(yPapel>=yAtor && yPapel<=alturaAtor){
      if(rangePapel > xAtor && rangePapel < rangePersona){
        if(cor==3){
          pontos +=1;  
          cura+=1
          yPapel= -60;
          xPapel= Math.floor(Math.random()*710)+50;
        }
      }
    }
  
//LATA
    if(yLata>=yAtor && cor==4){
      if(rangeLata > xAtor && rangeLata < rangePersona){
        if(cor==4){
          pontos +=1;
          cura+=1
          yLata= -220;
          xLata= Math.floor(Math.random()*710)+50;
        }
      }
    }  
}

function damage(){
  if(ySacola>=780){
    xSacola= Math.floor(Math.random()*710)+50;
    ySacola = -200;
    vida-=1
  }
   if(yGarrafa>=780){
    xGarrafa=Math.floor(Math.random()*710)+50;
    yGarrafa = -100;
    vida-=1
    cura-=1;
     
  }
   if(yPapel>=780){
     xPapel= Math.floor(Math.random()*710)+50;
    yPapel= -60;
    vida-=1;
    cura-=1;
  }
   if(yLata>=780){
     xLata=Math.floor(Math.random()*710)+50;
    yLata= -220;
    vida-=1
    cura-=1;
  }
  if(cura>=3){
    vida+=1;
    cura=0;
  }
  if(cura<=0){
    cura=0;
  }
}

let pontos= 0;
function contaPontos(){
  fill(255, 255,0);
  textAlign(CENTER);
  textSize(20);
  text(pontos, 100, 25);
}





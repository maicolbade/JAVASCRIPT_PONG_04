//aqui estou criando e configurando a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamanhoBolinha = 25;
let raioBolinha = tamanhoBolinha/2;


//aqui estou configurando a velocidade da bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

//aqui estou configurando a raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;


//raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let yvelocidadeOponente = 0;
let bateu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(128,128,0);
  
  criaBolinha(xBolinha, yBolinha, tamanhoBolinha);
  movimentaBolinha();
  bolinhaBorda();
  criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
  movimentaRaquete();
  criaRaquete(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteoponente();

}

function criaBolinha(xBolinha, yBolinha, tamanhoBolinha){
  fill("red");
  circle(xBolinha, yBolinha, tamanhoBolinha);
}

function movimentaBolinha(){
    xBolinha = xvelocidadeBolinha + xBolinha;
  yBolinha = yvelocidadeBolinha + yBolinha;
}
function bolinhaBorda(){
    if(xBolinha > width || xBolinha < 0){
    xvelocidadeBolinha *= -1;
  }
  if(yBolinha > height || yBolinha < 0){
    yvelocidadeBolinha *= -1;
  }
}
function criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete){
  fill("blue");
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
function movimentaRaquete(){
  
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
    if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  
}
function colideRaquete(){
  
  if(xBolinha - raioBolinha < xRaquete + alturaRaquete &&
    yBolinha - raioBolinha < yRaquete + larguraRaquete &&
    yBolinha - raioBolinha > yRaquete){
    
    xvelocidadeBolinha *= -1;
    yvelocidadeBolinha *= -1;
    
  }
  
}
function movimentaRaqueteOponente(){
  yvelocidadeOponente = yBolinha - yRaqueteOponente - (alturaRaquete/2);
  
  yRaqueteOponente += yvelocidadeOponente;
}

function verificaColisaoRaqueteoponente(){
  bateu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
  
  if(bateu){
    
    xvelocidadeBolinha *= -1;
    yvelocidadeBolinha *= -1;
    
  }
  
}
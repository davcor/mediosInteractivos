var ano;
var mes;
var dia;


var hora
var minuto;
var segundo;

function setup() { 
  createCanvas(400, 400);
  angleMode(DEGREES);
} 



function draw() { 
  background(10);
  
  ano = year();
  mes = month();
  dia= day();
  
  hora = hour();
minuto = minute();
segundo = second();

  
  
  push();
  translate(height/2, width/2);
 
 
 
  
  push();
  segundoMapeado= map(segundo,0,59,0,359);
  rotate(segundoMapeado);
  ellipse(0,40,10,10);
  pop();
  
  push();
  minutoMapeado = map( minuto,0,59,0,359);
  rotate(minutoMapeado);
  ellipse(0,180,20);
  pop();
  
  push();
  //if(hora>12){
    //hora = hora-12;
  //}
  horaMapeada = map(hora,0,23,0,359);
  rotate(horaMapeada);
   fill(200,200,0);
  ellipse(0,100,110,110);
  noStroke();
  fill(255,255,0);
  ellipse(0,100,100,100);
 
  pop();
  
  horaMapeada = map(hora,0,23,0,359);
  rotate(horaMapeada);
  fill(240,240,240);
  ellipse(0,-90,60,60);
  fill(170);
  ellipse(0,-100, 20,20);
  fill(170);
  ellipse(5,-70, 10,10);
  pop();
  
  
  
  
  
}
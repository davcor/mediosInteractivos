var ano;
var mes;
var dia;


var hora
var minuto;
var segundo;
//variables de teimpo

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
segundo = second();// variables de tiempo

  
  if( 5<hora<19){
    hora = hora -1;
  }// desaceleracion del tiempo en el dia
    
    if( 19>hora>5){
      hora = hora +1;
    }
  // Aceleracion del tiempo en la noche
  push();
  translate(height/2, width/2);
 
 
 
  
  push();
  if( 5<hora<19){
    segundoMapeado= map(segundo,0,70,0,359);
  }// aumento en la rotacion total del mapeo para el dia.
    
    if( 19>hora>5){
      segundoMapeado= map(segundo,0,40,0,359);
    }// reducciòn de la rotacion total del mapeo de noche.
  
  // estrellas segundos
  rotate(segundoMapeado + 20);
  ellipse(10,20,10,10);
  ellipse(20,30,10,10);
  ellipse(30,40,10,10);
  ellipse(40,50,10,10);
  ellipse(50,60,10,10);
  ellipse(60,70,10,10);
  ellipse(70,80,10,10); // estrellas segundero
  
  pop();
  
  push();
  if( 5<hora<19){
    minutoMapeado= map(minuto,0,70,0,359);
  }// aumento en la rotacion total del mapeo para el dia.
    
    if( 19>hora>5){
      minutoMapeado= map(minuto,0,40,0,359);
    }// reducciòn de la rotacion total del mapeo de noche.
  
  rotate(minutoMapeado);
  ellipse(0,180,20); // estrella minutero
  pop();
  
  push();
  //if(hora>12){
    //hora = hora-12;
  //}
  //sol
  horaMapeada = map(hora,0,23,0,359);
  rotate(horaMapeada);
   fill(200,200,0);
  ellipse(0,100,110,110);
  noStroke();
  fill(255,255,0);
  ellipse(0,100,100,100);//circulos sol
  
  
 
  pop();
  //luna
  horaMapeada = map(hora,0,23,0,359);
  rotate(horaMapeada);
  fill(240,240,240);
  ellipse(0,-90,60,60);
  fill(170);
  ellipse(0,-100, 20,20);
  fill(170);
  ellipse(5,-70, 10,10);// circulos luna
  pop();
  
  
  
  
  
  
  
}
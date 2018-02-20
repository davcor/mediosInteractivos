// Primero definimos la posición y el tamaño de los botones. 
var boton1x = 40;
var boton1y = 40;
var boton1tam = 20;

var boton2x = 70;
var boton2y = 40;
var boton2tam = 20;

var boton3x = 100;
var boton3y = 40;
var boton3tam = 20;

var boton4x = 130;
var boton4y = 40;
var boton4tam = 20;

var boton5x = 160;
var boton5y = 40;
var boton5tam = 20;

var boton6x = 190;
var boton6y = 40;
var boton6tam = 20;

var boton7x = 220;
var boton7y = 40;
var boton7tam = 20;

var boton8x = 250;
var boton8y = 40;
var boton8tam = 20;

var boton9x = 280;
var boton9y = 40;
var boton9tam = 20;

var boton10x = 310;
var boton10y = 40;
var boton10tam = 20;

var boton11x = 50;
var boton11y = 20;
var boton11tam = 20;

var boton12x = 50;
var boton12y = 90;
var boton12tam = 20;

var boton13x = 80;
var boton13y = 80;
var boton13tam = 20;

var boton14x = 130;
var boton14y = 90;
var boton14tam = 20;

var boton15x = 170;
var boton15y = 90;
var boton15tam = 20;

var boton16x = 210;
var boton16y = 90;
var boton16tam = 20;

var boton17x = 250;
var boton17y = 90;
var boton17tam = 20;

var boton18x = 290;
var boton18y = 90;
var boton18tam = 20;

var boton19x = 330;
var boton19y = 90;
var boton19tam = 20;

var boton20x = 370;
var boton20y = 90;
var boton20tam = 20;

var boton21x = 410;
var boton21y = 90;
var boton21tam = 20;





// Estas dos variables nos sirven para saber qué color y qué herramienta
// tenemos seleccionada.
var herramienta = 0;
var colorSelect = 0;

function setup() {
  // Usamos windowWidth y windowHeight para saber cual es el tamaño de
  // la ventana del explorador de la persona que esta visitando nuestra 
  // página y creamos un canvas de este tamaño.
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  

}

function draw() {
  // Pintamos los botones en la pantalla para que el usuario sepa donde
  // debe hace click. Aunque en este ejemplo solo de usan rectángulos,
  // estos botones deberían ser representativos de la función para la
  // que sirven. 
  stroke(0);
  frameRate(60);
  fill(200);
  rect(0, 0, windowWidth, 120);

  fill(0, 0, 0);
  rect(boton1x, boton1y, boton1tam, boton1tam);
  fill(10, 10, 200);
  rect(boton2x, boton2y, boton2tam, boton2tam);
  fill(200, 100, 0);
  rect(boton3x, boton3y, boton3tam, boton3tam);
  fill(0, 100, 255);
  rect(boton4x, boton4y, boton4tam, boton4tam);
  fill(100, 200, 50);
  rect(boton5x, boton5y, boton5tam, boton5tam);
  fill(100,55, 200);
  rect(boton6x, boton6y, boton6tam, boton6tam);
  fill(50, 150, 100);
  rect(boton7x, boton7y, boton7tam, boton7tam);
  fill(50, 200, 255);
  rect(boton8x, boton8y, boton8tam, boton8tam);
  fill(1000,55, 200);
  rect(boton9x, boton9y, boton9tam, boton9tam);
  fill(50, 150, 100);
  rect(boton10x, boton10y, boton10tam, boton10tam);
  fill(255);
  ellipse(boton11x, boton11y, boton11tam, boton11tam);
  ellipse(boton12x, boton12y, boton12tam, boton12tam);
  rect(boton13x, boton13y, boton13tam, boton13tam);
  triangle(boton14x-15, boton14y+10, boton14x+15, boton14y+10, boton14x, boton14y-10);
  quad( boton15x-10,boton15y+10,boton15x+10,boton15y-5, boton15x+20,boton15y+10, boton15x,boton15y-5);
  quad(boton16x-10,boton16y+10,boton16x-10,boton16y-10, boton16x+20,boton16y+10, boton16x+20,boton16y-10);
  ellipse(boton17x, boton17y, boton17tam, boton17tam);
  ellipse(boton17x, boton17y, boton17tam-10, boton17tam-10);
  ellipse(boton18x, boton18y, boton18tam, boton18tam);
  ellipse(boton19x, boton19y, boton19tam, boton19tam);
  ellipse(boton20x, boton20y, boton20tam, boton20tam);
  ellipse(boton21x, boton21y, boton21tam, boton21tam);
 



  if (mouseIsPressed) {
    // Definimos el área sensible de los botones y para que sirven.
    // En este caso tenemos dos botones que sirven para cambiar entre
    // dos herramientas.
    if (mouseX > boton12x-boton12tam/2 && mouseX < boton12x + boton12tam/2 &&
      mouseY > boton12y-boton12tam/2 && mouseY < boton12y + boton12tam/2) {
      herramienta = 0;
    }
    if (mouseX > boton13x && mouseX < boton13x + boton13tam &&
      mouseY > boton13y && mouseY < boton13y + boton13tam) {
      herramienta = 1;
    }
    // Y dos botones que sirven para cambiar entre dos colores.
    if (mouseX > boton14x-30 && mouseX < boton14x + 20 &&
      mouseY > boton14y-50 && mouseY < boton14y +30) {
      herramienta = 2;
    }
    if (mouseX > boton15x && mouseX < boton15x + boton15tam &&
      mouseY > boton15y && mouseY < boton15y + boton15tam) {
      herramienta = 3;
    }
    if (mouseX > boton16x && mouseX < boton16x + boton16tam &&
      mouseY > boton16y && mouseY < boton16y + boton16tam) {
      herramienta = 4;
    }
      if (mouseX > boton17x-boton17x/2 && mouseX < boton17x + boton17tam/2 &&
      mouseY > boton17y-boton17y/2 && mouseY < boton17y + boton17tam/2) {
      herramienta = 5;
    }
    if (mouseX > boton18x && mouseX < boton18x + boton18tam &&
      mouseY > boton18y && mouseY < boton18y + boton18tam) {
      herramienta = 6;
    }
    
    if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
      mouseY > boton1y && mouseY < boton1y + boton1tam) {
      colorSelect = 1;
    }
    if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
      mouseY > boton2y && mouseY < boton2y + boton2tam) {
      colorSelect = 2;
    }
    if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
      mouseY > boton3y && mouseY < boton3y + boton3tam) {
      colorSelect = 3;
    }
    if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
      mouseY > boton4y && mouseY < boton4y + boton4tam) {
      colorSelect = 4;
      }
    if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
      mouseY > boton5y && mouseY < boton5y + boton5tam) {
      colorSelect = 5;
      }
    if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
      mouseY > boton6y && mouseY < boton6y + boton6tam) {
      colorSelect = 6;
      }
    if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
      mouseY > boton7y && mouseY < boton7y + boton7tam) {
      colorSelect = 7;
      }
    if (mouseX > boton8x && mouseX < boton8x + boton8tam &&
      mouseY > boton8y && mouseY < boton8y + boton8tam) {
      colorSelect = 8;
      }
    if (mouseX > boton9x && mouseX < boton9x + boton9tam &&
      mouseY > boton9y && mouseY < boton9y + boton9tam) {
      colorSelect = 9;
      }
     if (mouseX > boton10x && mouseX < boton10x + boton10tam &&
      mouseY > boton10y && mouseY < boton10y + boton10tam) {
      colorSelect = 10;
      }
    if (mouseX > boton11x-boton11tam/2 && mouseX < boton11x + boton11tam/2 &&
      mouseY > boton11y-boton11tam/2 && mouseY < boton11y + boton11tam/2) {
      colorSelect = 11;
      herramienta = 11;
    }


    // Una vez seleccionado el color, lo usamos para cambiar el
    // color de relleno de la figura que pintamos después.
    if (colorSelect == 1) {
      fill(0);
    }
    if (colorSelect == 2) {
      fill(10, 10, 200);
    }
    if (colorSelect == 3) {
      fill(200, 100, 0);
    }
    if (colorSelect == 4) {
      fill(0, 100, 255);
    }
    if (colorSelect == 5) {
      fill(100, 200, 50);
    }
    if (colorSelect == 6) {
      fill(100,55, 200);
    }
    if (colorSelect == 7) {
      fill(50, 150, 100);
    }
    if (colorSelect == 8) {
      fill(50, 200, 255);
    }
    
    if (colorSelect == 9) {
      fill(1000,55, 200);
    }
    if (colorSelect == 10) {
      fill(50, 150, 100);
    }
    
    if (colorSelect == 11) {
      fill(255);
    }
   
    // Y una vez seleccionada la herramienta la usamos para pintar
    // en la pantalla.
    noStroke();
    if (herramienta == 0) {
      ellipse(mouseX - 10, mouseY - 10, 20, 20);
      
    }
    if (herramienta == 1) {
      rect(mouseX - 10, mouseY - 10, 20, 20);
      line(width / 2, height / 2, mouseX, mouseY);
    }
        if (herramienta == 2) {
      triangle(mouseX - 15, mouseY + 10, mouseX+15, mouseY +10, mouseX ,mouseY-10);
      
    }
    if (herramienta == 11) {
      ellipse(mouseX - 10, mouseY - 10, 50, 50);
      line(width / 2, height / 2, mouseX, mouseY);
    }
    if (herramienta == 3) {
      quad( mouseX-10,mouseY+10,mouseX+10,mouseY-5, mouseX+20,mouseY+10, mouseX,mouseY-5);
      
    }
   
    if(herramienta == 4) {
    quad(mouseX-10,mouseY+10,mouseX-10,mouseY-10, mouseX+20,mouseY+10, mouseX+20,mouseY-10);
    }
     if (herramienta == 5) {
       ellipse(mouseX, mouseY, 20, 20);
       fill(255);
  			ellipse(mouseX, mouseY, 10, 10);
      
    }
  
  }
}
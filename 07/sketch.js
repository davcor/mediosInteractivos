var miMono;
var filtro;
var offset = 0;
var easing = 0.05;

function preload() 
{
 //se carga la imágen en el sketch, la imágen debe llevar el nombre
  //con el que la subieron a la carpeta de assets
 miMono = loadImage('yo/Monos.jpg');

}


function setup() {

  createCanvas(500, 355);
   
  
 //se dibuja la imágen con la esquina superior izq 0,0
 image(miMono, 0, 0);
 

}


function draw() {
   stroke(0);
   rect(0,0,50,50);
  rect(50,0,50,50);
	
  //EJEMPLO 1
 // este for recorre los pixeles al rededor del mouse en X y Y 
 for (var f = mouseY-20; f<mouseY+20; f=f+6)
 {
  
  for (var c = mouseX-20; c<mouseX+20; c=c+6)
  {
     // al hacer el for recoge los valores de color en X y Y de los pixeles
    //al rededor del mouse
    var colSel = get(c, f);

    //guarda en una variable el valor de rojo, verde y azul que hacen parte 
    //del color que se seleccionó de los pixeles
    var rojo = red(colSel);
    
    var verde = green(colSel);
   
    var azul = blue(colSel);
     
   //se utiliza ese color para pintar elipses grandes al rededor del mouse
    //con el mismo color...lo que ocurre es que se va "coloreando" la foto
    //con una menor resolución 
    fill(colSel);
    noStroke();
    ellipse(c, f, 10, 10);
    
   }
 }
  
  
  if (mouseIsPressed) {
    // Definimos el área sensible de los botones y para que sirven.
    // En este caso tenemos dos botones que sirven para cambiar entre
    // dos herramientas.
    if (mouseX >0 && mouseX < 50 &&
      mouseY > 0 && mouseY < 50) {
      filtro = 0;
    }
    if (mouseX > 50 && mouseX <100 &&
      mouseY > 0 && mouseY < 50) {
      filtro = 1;
    }
  }
    if (filtro == 0) {
      image(miMono, 0, 0);
  filter(POSTERIZE, 3);
       stroke(0);
   rect(0,0,50,50);
  rect(50,0,50,50);
    }
  
  // filtro de movimiento
  if (filtro == 1) {
     image(miMono, 0, 0);  // Muestra la imagen al 100% de opacidad
  var dx = (mouseX-miMono.width/2) - offset;
  offset += dx * easing;
  tint(255, 127);  // Muestra la imagen al 50% de opacidad
  image(miMono, offset, 0);
    stroke(0);
   rect(0,0,50,50);
  rect(50,0,50,50);
    }
  
  
}
 
 
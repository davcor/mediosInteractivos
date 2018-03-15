var mx = 0.0;
var verde = 132;
var rojo = 4;
var azul = 4;
var contador = 0;
var contador1 = 0;
var contador2 = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  normalMaterial();
}

function draw() {
  background(0, 150, 250);
  stroke(rojo-20,verde-20,azul-20);

  scale(0.5);
 // translate(mouseX-(width/2), mouseY-(height/2), 0);
 // push();
push();
  rotateY(mouseX/100);
  translate(0, 100, 0);

  //pasto
  push();
  translate(0,0, 0);
  rotateX(PI/2);
  fill(rojo + 109, verde+108, azul + 109);
  plane(width, 400);
  pop();
	
  //agua
	push();
  translate(0, 0, 140);
  rotateX(PI/2);
  fill(rojo +109, verde - 19,255);
  plane(width/2, 50);
  pop();

  //arbol medio 1
  push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(10, 10);
  translate(0, 50, 0);
  fill(rojo, verde, azul);
  cone(50, 100);
  translate(0, 50, 0);
  fill(rojo, verde, azul);
  cone(50, 100);
  translate(0, 50, 0);
  fill(rojo, verde, azul);
  cone(40, 90);
  pop();
	
	
	//arbol medio 2
	push();
	translate(100,0,10);
	push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(10, 10);
  translate(0, 50, 0);
  fill(rojo, verde, azul);
  cone(50, 100);
  translate(0, 50, 0);
  fill(rojo, verde, azul);
  cone(50, 100);
  translate(0, 50, 0);
  fill(rojo, verde, azul);
  cone(40, 90);
  pop();
	pop();
	
  //arbol medio 3
	push();
	translate(-100,0,10);
	push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(10, 10);
  translate(0, 50, 0);
  fill(rojo, verde,azul);
  cone(50, 100);
  translate(0, 50, 0);
  fill(rojo, verde, azul);
  cone(50, 100);
  translate(0, 50, 0);
  fill(rojo, verde, azul);
  cone(40, 90);
  pop();
	pop();
	
  //arbol delante 1
	push();
	translate(-100,0,100);
	push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(5, 5);
  translate(0, 40, 0);
  fill(rojo, verde, azul);
  cone(30, 60);
  translate(0, 20, 0);
  fill(rojo, verde, azul);
  cone(20, 50);
  translate(0, 20, 0);
  fill(rojo, verde, azul);
  cone(10, 40);
  pop();
	pop();
	
	//arbol delante 2
	push();
	translate(0,0,100);
	push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(5, 5);
  translate(0, 40, 0);
  fill(rojo, verde, azul);
  cone(30, 60);
  translate(0, 20, 0);
  fill(rojo, verde, azul);
  cone(20, 50);
  translate(0, 20, 0);
  fill(rojo, verde, azul);
  cone(10, 40);
  pop();
	pop();
	
  //arbol delante 3
	push();
	translate(100,0,100);
	push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(5, 5);
  translate(0, 40, 0);
  fill(rojo, verde, azul);
  cone(30, 60);
  translate(0, 20, 0);
  fill(rojo, verde, azul);
  cone(20, 50);
  translate(0, 20, 0);
  fill(rojo, verde, azul);
  cone(10, 40);
  pop();
	pop();
	
  //arbol atras 1
	push();
	translate(100,0,-100);
	push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(30, 30);
  translate(0, 80, 0);
  fill(rojo,verde, azul);
  cone(90, 140);
  translate(0, 80, 0);
  fill(rojo,verde, azul);
  cone(90, 140);
  translate(0, 80, 0);
  fill(rojo, verde, azul);
  cone(70, 120);
  pop();
	pop();
	
  //arbol atras 2
	push();
	translate(0,0,-100);
	push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(30, 30);
  translate(0, 80, 0);
  fill(rojo,verde, azul);
  cone(90, 140);
  translate(0, 80, 0);
  fill(rojo, verde, azul);
  cone(90, 140);
  translate(0, 80, 0);
  fill(rojo, verde, azul);
  cone(70, 120);
  pop();
	pop();
	
  //arbol atras 3
	push();
	translate(-100,0,-100);
	push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(30, 30);
  translate(0, 80, 0);
  fill(rojo, verde,azul);
  cone(90, 140);
  translate(0, 80, 0);
  fill(rojo, verde, azul);
  cone(90, 140);
  translate(0, 80, 0);
  fill(rojo,verde, azul);
  cone(70, 120);
  pop();
	pop();
  pop();
  


  // ------- SU CODIGO AQUÍ ------- //


  // Actualiza a localización del marcador
  var dif = mouseX - mx;
  if (abs(dif) > 1.0) {
    mx = mx + dif/32.0;
  }
  // Mantiene el marcador en la pantalla
  mx = constrain(mx, 1, width-1);
  noStroke();
  // Dibuja el rectángulo inferior
  push();
  fill(255);
  translate(0, (height/2)-2);
  plane(width, 5);
  pop();
  // Dibuja el marcador de posición
  push();
  fill(204, 102, 0);
  translate(mx-(width/2)-1, (height/2)-2);
  plane(4, 5);
  pop();

	var invierano = map(mx,0,400,0,255);
		
  // verano a invierno
  verde= invierano+100;
		rojo= invierano;
		azul= invierano;
  contador=contador + 1;
  contador1=contador1+1;
  contador2= contador2+1;
  if(mx>200){
  // nieve
    push();
    translate(0,-600+contador,0);
    for(var bolas = 0; bolas <10; bolas=bolas+1){
      
      fill(255);
      sphere(5);
      translate(30,0,90);
      
    }
    pop();
    
    push();
    translate(0,-550+contador1,0);
    for(var bolas = 0; bolas <10; bolas=bolas+1){
      
      fill(255);
      sphere(5);
      translate(40,0,90);
    }
    pop();
   
     push();
    translate(0,-500+contador2,0);
    for(var bolas = 0; bolas <20; bolas=bolas+1){
      
      fill(255);
      sphere(5);
      translate(15,0,90);
    }
    pop();
  }
   
  if(contador>700){
    contador = 0;
  }
  if(contador1>600){
    contador1 = 0;
  }
  if(contador2>500){
    contador2 = 0;
  }
	
}
function setup() {
	createCanvas(450, 400);	//tamaño papel
	background(237,233,204);	//color papel
	
	strokeWeight(6);	// tamaño linea 1
	stroke(0,0,0); //color linea 1
	line(350,400,350,0);
 
  strokeWeight(7.5);	// tamaño linea 2
	line(335,400,335,0); //tamaño linea 2
  
  strokeWeight(4);	// tamaño linea 3-5
  line(280,370,410,366); //linea 3
  line(280,360,410,356); // linea 4
  line(280,350,410,346); // linea 5
  
  strokeWeight(5);	// tamaño linea 6-7
  line(270,63,420,60); // linea 6
  line(273,71,420,68); // linea 7
  
  
	strokeWeight(8);// tamaño stroke triangulo grande
  fill(235,216,222); // relleno triangulo grande
	triangle(0,410,80,35,160,410); // triangulo grande

  strokeWeight(5);	// tamaño linea 8
	line(0,330,100,400); // linea 8
	
	fill(0,0,0,0); // relleno semi circulo
  arc(363, 160, 110, 110,PI/2.4,-PI/2.4, OPEN); // semi circulo
 
  ellipse(240,300,100,100); // circulo afuera
  
  stroke(0,0,0,99); // color borde circulo medio
  strokeWeight(0.9); // grosor circulo medio
  ellipse(240,300,86,86); // circulo medio
  
  stroke(0,0,0,99); // color borde circulo adentro
  strokeWeight(3); // grosor circulo adentro
  ellipse(240,300,92,92);// circulo adentro

  strokeWeight(2); // grosor circulo pequeño
  fill(44,41,148); // grosor circulo pequeño
	ellipse(240,300,80,80); //circulo pequeño
  
  stroke(0,0,0,0); //color triangulo pequeño
  fill(237,217,33); // relleno triangulo pequeño
  triangle(80,273,150,180,195,272); // triangulo pequeño
  
  stroke(0,0,0); // triangulo grande vacìo
  fill(0,0,0,0); // relleno triangulo grande vacìo
  strokeWeight(8);	// grosor triangulo grande vacìo
	triangle(0,410,80,35,160,410); // triangulo grande vacìo

	
}

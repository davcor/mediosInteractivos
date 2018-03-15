var posX = 0;
var posY = 0;
var color1= color(210,195,166);

var rojo = color(255);
function setup() { 
  createCanvas(236, 356);
  background(194,62,46);

  //rectangulo rayado rojo 1
  stroke(210,195,166); 
	for (var numFila = 0; numFila < 6; numFila++) {
		for (var num = 0; num < 1; num++) {
			fill(210,195,166);
			rect(posX, posY+11, 60, 15);
			posX = posX + 30;
		}
		posY = posY+30;
	 	posX = 0;
	}
 
 //rectangulo cruz rojo 1
  strokeWeight(3);
	stroke(210,195,166, 30);
  
  for (var numFila2 = 0; numFila2 < 2; numFila2++) {
		for (var num2 = 0; num2 < 2; num2++) {
			fill(210,195,166);
			rect(posX+60, posY-181, 28, 88);
			posX = posX + 30;
		}
		
		posY = posY+90;
	 	posX = 0;
	}
 
  //rectangulo rayado rojo 2
  strokeWeight(1);
  stroke(210,195,166); 
	for (var numFila = 0; numFila < 6; numFila++) {
		for (var num = 0; num < 1; num++) {
			fill(210,195,166);
			rect(posX+118, posY-349, 60, 15);			
			posX = posX + 30;
		}	
		posY = posY+30;
	 	posX = 0;
	}
 
  //rectangulo cruz rojo 2
   strokeWeight(3);
	stroke(210,195,166, 30);
  
  for (var numFila2 = 0; numFila2 < 2; numFila2++) {
		for (var num2 = 0; num2 < 2; num2++) {
			fill(210,195,166);
			rect(posX+178, posY-541, 28, 88);
			posX = posX + 30;
		}
		
		posY = posY+90;
	 	posX = 0;
	}
  
   fill(194,176,142);
  rect(-1,176,237,182);
  
  //rectangulo cruz negro 1
   strokeWeight(3);
	stroke(255,255,255, 30);
  
  for (var numFila2 = 0; numFila2 < 2; numFila2++) {
		for (var num2 = 0; num2 < 2; num2++) {
			fill(0,0,0);
			rect(posX, posY-543, 28, 88);
			posX = posX + 30;
		}
		
		posY = posY+90;
	 	posX = 0;
	}
	 
 
  //rectangulo rayado negro 1
   strokeWeight(1);
  stroke(0); 
	for (var numFila = 0; numFila < 6; numFila++) {
		for (var num = 0; num < 1; num++) {
			fill(0, 0, 0);
			rect(posX+58, posY-710, 60, 15);			
			posX = posX + 30;
		}	
		posY = posY+30;
	 	posX = 0;
	}
  
  //rectangulo cruz 2
     strokeWeight(3);
	stroke(255,255,255, 30);
  
  for (var numFila2 = 0; numFila2 < 2; numFila2++) {
		for (var num2 = 0; num2 < 2; num2++) {
			fill(0,0,0);
			rect(posX+118, posY-903, 28, 88);
			posX = posX + 30
		}
		
		posY = posY+90;
	 	posX = 0;
	}
	 
  //rectangulo rayado negro 2
   strokeWeight(1);
  stroke(0); 
	for (var numFila = 0; numFila < 6; numFila++) {
		for (var num = 0; num < 1; num++) {
			fill(0, 0, 0);
			rect(posX+176, posY-1070, 60, 15);			
			posX = posX + 30;
		}	
		posY = posY+30;
	 	posX = 0;
	}
  
 
   
  
}
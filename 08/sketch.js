var yoff = 0.0;  // 2nd dimension of perlin noise
var barcoX= 50;
var nubesX= 50;
var solY = 100;
var solX = 710;
var rojo = 255;
var verde =255;
var azul = 255;
var lunaX = 0;
var lunaY = 500;
var yoff2 = 0.0;
var yoff3 = 0.0;
  
var miSonido;
var amplitud;

function preload(){
  miSonido=loadSound('audio/chanchan.mp3');
}


function setup() {
  createCanvas(710, 420);
  miSonido.play();
  amplitude = new p5.Amplitude();
  miSonido.jump(miSonido.currentTime()+5);
}

function draw() {
  background(rojo, verde, azul);
  frameRate(50);
  
   strokeWeight(1);
   fill(250,250,20);
  ellipse(solX,solY,120,120)
  if(solY<1100){
    solY = solY+0.9;
  }
  if (solX<1100){
    solX = solX+0.2;
  }

  if(solY>160){
   rojo = rojo -1.2; 
  	verde = verde -1.8;
    azul = azul-1.8;
  }
  
  
   fill(250,250,250);
  ellipse(lunaX,lunaY,110,110)
 fill(190);
  ellipse(lunaX+15,lunaY-15,10,10)
  fill(190);
  ellipse(lunaX+24,lunaY+23,33,33)
   fill(190);
  ellipse(lunaX-20,lunaY+15,15,15)
   fill(170);
  ellipse(lunaX-25,lunaY-20,17,15)
  if(lunaY>85){
    lunaY = lunaY-0.8;
  }
  if (lunaY>85){
    lunaX = lunaX+0.1;
  }

 
  noStroke();
  fill(255);
  ellipse(10,10,3,3);
  ellipse(300,80,3,3);
  ellipse(100,130,3,3);
  ellipse(200,110,4,4);
  ellipse(150,30,3,3);
  ellipse(500,100,3,3);
  ellipse(350,20,3,3);
  ellipse(250,200,4,4);
  ellipse(700,50,4,4);
   ellipse(550,200,4,4);
   ellipse(410,170,4,4);
  
  
  
  stroke(0);
  fill(50,50,250);
  // We are going to draw a polygon out of the wave points
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    if(miSonido.isPaused()){
   var y = map(noise(xoff, yoff), 0, 1, 220,240);
    }
    else
    y = map(noise(xoff, yoff), 0, 1, 200,280);
    

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
  
  

  noStroke();
 
  fill(230);
  ellipse(nubesX,50,80,60);
  ellipse(nubesX+30,48,70,70);
  ellipse(nubesX+40,50,60,60);
   ellipse(nubesX+60,48,70,60);
  
  ellipse(nubesX +250,110,70,60);
  ellipse(nubesX+280,112,80,70);
  ellipse(nubesX+290,112,80,70);
   ellipse(nubesX+310,110,70,60);
  
  
  ellipse(nubesX+570,60,70,60);
  ellipse(nubesX +600,64,120,70);
  ellipse(nubesX+600, 50,60,70);
   ellipse(nubesX+630,60,70,60);
  
  ellipse(nubesX+750,150,80,60);
  ellipse(nubesX+780,148,70,70);
  ellipse(nubesX+790,150,60,60);
   ellipse(nubesX+810,148,70,60);
  
  if(nubesX>-100){
    nubesX = nubesX-0.2;
  }
  
  
  
  var level = amplitude.getLevel();
  var newLevel = map(level,0,1,0,100);
  print(newLevel);
 
  
  
  scale(miSonido.getVolume()/2);
  //scale(newLevel/200);
  
  stroke(0);
  strokeWeight(2);
  fill(100,100,0);
 // arc(barcoX, 250, 190+ newLevel*5, 110+ newLevel*5, 0, TWO_PI - PI, CHORD );
  arc(barcoX, 250, 190, 110, 0, TWO_PI - PI, CHORD );
  
 	strokeWeight(3);
  line(barcoX,250,barcoX,150);
  
  fill(220);
  triangle(barcoX+5,235,barcoX +72  , 235, barcoX+5, 150);
  
  
  
  if(barcoX<800){
    barcoX = barcoX+1.5;
  }
  
  if(barcoX>=800){
    barcoX = -100;
  }
  
   miSonido.setVolume(map(barcoX, 0, 800, 0.6, 3.0));
  
  strokeWeight(1);
  stroke(0);
  fill(50,50,250);
  // We are going to draw a polygon out of the wave points
  beginShape(); 
  
  var xoff2 = 0;       // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width*10; x += 10) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    if(miSonido.isPaused()){
   var y = map(noise(xoff2, yoff2), 0, 1, 260,280);
    }
    else{
    y = map(noise(xoff2, yoff2), 0, 1, 250,320);
    }

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);
    
    // Set the verte
    vertex(x, y); 
    // Increment x dimension for noise
    xoff2 += 0.05;
  }
  // increment y dimension for noise
  yoff2 += 0.01;
  vertex(width*10, height);
  vertex(0, height);
  endShape(CLOSE);
  
   beginShape(); 
  
  var xoff3 = 0;       // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width*10; x += 10) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    if(miSonido.isPaused()){
   var y = map(noise(xoff3, yoff3), 0, 1, 320,340);
    }
    else{
    y = map(noise(xoff3, yoff3), 0, 1, 300,380);
    }
  

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff3 += 0.05;
  }
  // increment y dimension for noise
  yoff3 += 0.01;
  vertex(width*10, height*10);
  vertex(0, height*10);
  endShape(CLOSE);
  
  
  
    
  
  
  
}

function mouseReleased()
{
   if( miSonido.isPlaying())
   {
      miSonido.pause();
   }
     else{
       
       miSonido.play();
     }
  
}

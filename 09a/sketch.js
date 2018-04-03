var David;
var Sara;
var Groleo = 0;

var Felipe;

var Mateo;

var Chuckles;

var Juan;

function setup() {
  createCanvas(800, 800);


  David = new Rata(1);
  Sara = new Rata(2);

  Felipe = new Pollito(1);

	Mateo = new Vaquito(1);
	
  Chuckles = new Cerdito(1);
  
  Juan = new Granjero(1);
  
  



}

function draw() {

  background(40,190,40);

  David.dibujarse();
  David.moverse();
  David.crecer();
  Sara.dibujarse();
  Sara.moverse();
  Sara.crecer();

  Felipe.dibujarse();
  Felipe.moverse();
  
  Mateo.dibujarse();
  Mateo.moverse();
  
  Chuckles.dibujarse();
  Chuckles.moverse();

  Juan.dibujarse();
  

  if (Groleo != 0) {
    Groleo.dibujarse();
    Groleo.moverse();
    Groleo.crecer();
  }

  if (dist(David.x, David.y, Sara.x, Sara.y) < 50 && Groleo == 0) {
    Groleo = new Rata(random(0, 2));
  }

  if (dist(Juan.x, Juan.y, David.x, David.y) < 50 ) {
    David.morir();
  }
  
  if (dist(Juan.x, Juan.y, Sara.x, Sara.y) < 50) {
    Sara.morir();
  }

  if (mouseIsPressed) {
    Juan.x = mouseX;
  }

  if (mouseIsPressed) {
    Juan.y = mouseY;
  }

}

function Rata(genero) {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 48;
  this.genero = genero;



  this.dibujarse = function() {
    if (this.genero <= 1) {
      strokeWeight(4);
      stroke(150);
      line(this.x, this.y, this.x - 120, this.y);
      noStroke();
      fill(150);
      ellipse(this.x, this.y, this.tamano, this.tamano);
      fill(0, 0, 0);
      ellipse(this.x + 20, this.y - 10, this.tamano / 10, this.tamano / 10);
      ellipse(this.x + 20, this.y + 10, this.tamano / 10, this.tamano / 10);
    }

    if (this.genero > 1 && this.genero <= 2) {
      strokeWeight(4);
      stroke(220, 190, 190);
      line(this.x, this.y, this.x - 120, this.y);
      noStroke();
      fill(220, 190, 190);
      ellipse(this.x, this.y, this.tamano, this.tamano);
      fill(0);
      ellipse(this.x + 20, this.y - 10, this.tamano / 10, this.tamano / 10);
      ellipse(this.x + 20, this.y + 10, this.tamano / 10, this.tamano / 10);
    }

  }

  this.moverse = function() {
    this.x = this.x + 1
    if (this.x >= width) {
      this.x = 0;
      this.y = random(0,height);
    }
  }
  this.crecer = function() {
    if (this.tamano < 70) {
      this.tamano = this.tamano + 0.02;
    }
  }
  this.morir = function() {
    this.tamano = 0;
    
  }
}
  function Pollito(genero) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.tamano = 32;
    this.genero = genero;



    this.dibujarse = function() {
      if (this.genero == 1) {
        strokeWeight(4);
        stroke(150,150,80);
        triangle(this.x, this.y + 10, this.x, this.y - 10, this.x + 20, this.y);
        fill(0);
        noStroke();
        fill(230,230,20);
        ellipse(this.x, this.y, this.tamano, this.tamano);
        fill(0, 0, 0);
        ellipse(this.x + 10, this.y - 6, this.tamano / 10, this.tamano / 10);
        ellipse(this.x + 10, this.y + 6, this.tamano / 10, this.tamano / 10);
      }


    }

    this.moverse = function() {
      this.x = this.x + 1
      if (this.x >= width) {
        this.x = 0;
        this.y = random(0,height);
      }
    }
    this.crecer = function() {
      if (this.tamano < 70) {
        this.tamano = this.tamano + 0.02;
      }
    }
  }

  
    function Vaquito(genero) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.tamano = 32;
    this.genero = genero;



    this.dibujarse = function() {
      if (this.genero == 1) {
      fill(255);
        rect(this.x, this.y, 250 , 150,30);
        rect(this.x+248, this.y+25, 70 , 90,15);
        
        stroke(80,50,1)
        strokeWeight(7);
        fill(150,50,150,0);
        arc(this.x+320, this.y+70, 80, 80,  PI/2, -PI/2, OPEN);
        
        noStroke();
        fill(255);
        rect(this.x+255, this.y+50, 40 , 40);
        
        
        noStroke();
        fill(0);
        ellipse(this.x+25, this.y+40, this.tamano+10, this.tamano);
        ellipse(this.x+120, this.y+90, this.tamano+10, this.tamano);
        ellipse(this.x+200, this.y+50, this.tamano+20, this.tamano+15);
        ellipse(this.x+40, this.y+120, this.tamano+5, this.tamano+10);
        fill(0);
        
      }


    }

    this.moverse = function() {
      this.x = this.x + 1
      if (this.x >= width) {
        this.x = 0;
        this.y = random(0,height);
      }
    }
    this.crecer = function() {
      if (this.tamano < 40) {
        this.tamano = this.tamano + 0.02;
      }
    }
}

function Cerdito(genero) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.tamano = 32;
    this.genero = genero;



    this.dibujarse = function() {
      if (this.genero == 1) {
      fill(255,220,220);
        rect(this.x, this.y, 150 , 120,60);
        
        fill(230,200,200);
        rect(this.x+205, this.y+40, 15 , 30,5);
        
        fill(255,220,220);
        rect(this.x+138, this.y+15, 75 , 80,40);
        
        fill(255,220,220);
        stroke(255,220,220);
        strokeWeight(5);
        line(this.x, this.y+60, this.x-10, this.y+60);
        
        
      }


    }

    this.moverse = function() {
      this.x = this.x + 1
      if (this.x >= width) {
        this.x = 0;
        this.y = random(0,height);
      }
    }
    this.crecer = function() {
      if (this.tamano < 40) {
        this.tamano = this.tamano + 0.02;
      }
    }
}


function Granjero(genero) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.tamano = 32;
    this.genero = genero;



    this.dibujarse = function() {
      if (this.genero == 1) {
      noStroke();
        fill(0);
        ellipse(this.x+50,this.y+20,20,20);
        ellipse(this.x+50,this.y-20,20,20);
        fill(235,210,210);
        ellipse(this.x,this.y+50,20,20);
        ellipse(this.x,this.y-50,20,20);
        
        fill(100,100,210);
        ellipse(this.x, this.y, 110 , 110);
        fill(235,210,210);
        ellipse(this.x,this.y,80,80);
        
        
      }


    }

    this.moverse = function() {
      this.x = this.x + 1
      if (this.x >= width) {
        this.x = 0;
        this.y = random(0,height);
      }
    }
    this.crecer = function() {
      if (this.tamano < 40) {
        this.tamano = this.tamano + 0.02;
      }
    }
}
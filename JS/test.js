var choco ;
var toren ;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function preload() {
    choco = loadImage("image/choco.jpg");
    toren = loadImage("image/toren.jpg");
}

function draw() {
  background(choco);
  torenX += random(-5,5);
  torenY += random(-5,5);
  image(toren,torenX,torenY);
  }

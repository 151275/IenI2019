var diameter=0;

function setup() {
  canvas = createCanvas(600,600);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  for(var m=0;m<=4;m++){
    for(var n=0;n<=4;n++){
            TekenCirkel(50,50,100,'violet');
            translate(100,0);
  }
  translate(-600,100)
  }
}
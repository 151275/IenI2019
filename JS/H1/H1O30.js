var rij = 0;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  background('coral');
  fill('white');
}

function draw() {
    for (var rij = 0;kolom < 450;rij += 50) {
        for (var kolom = 0;kolom < 450;kolom += 50) {
            rect(kolom,rij,50,50);
        }
    }
}
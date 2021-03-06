function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // teken de grond
  noStroke();
  fill('wheat');
  rect(0,400,450,50);
  // teken het huis
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,330,100,100);
  fill('gray');
  triangle(100,330,150,250,200,330)
  // teken de deur
  noStroke();
  // PAS ONDERSTAANDE REGEL AAN zodat de deur op de juiste plaats staat
  rect(120,378,30,50);
  // teken de maan
  fill('khaki');
  // VERVANG DEZE REGEL door een regel die de maan tekent met een diameter van 150 en 25 vanaf de rand
  ellipse(350,100,150)
  // teken de boom
  fill('sienna');
  rect(300,300,40,130);
  fill('olive');
  // VERVANG DEZE REGEL door een regel die het groen van de boom tekent met behulp van ellipse
  ellipse(320,260,140,200)
  // Als je een cirkel wilt tekenen met diameter 300 kun je ellipse(0,0,300) gebruiken.
  // Als je een ellipse wilt maken met breedte 300 en hoogte 500, dan moet je een parameter toevoegen: ellipse(0,0,300,500).
}

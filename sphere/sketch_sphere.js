var radius;
var r = 15;
var d_lat = 10.0;
var d_alt = 30.0;
var fr = 60;
var framecount = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  radius = windowHeight/2-10;
  colorMode(HSB, 360, 100, 100);
  blendMode(ADD);
  noStroke();
  frameRate(fr);
  background(0);
  transx = windowWidth*0.5;
	transy = windowHeight*0.5;
}

function draw() {
  blendMode(BLEND);
  background(0);
  rectMode(CENTER);
  translate(transx, transy);
  framecount = framecount + 1;
  for(var i = -d_alt; i < d_alt+1; i++){
    for(var j = 0; j < d_lat; j++){
      blendMode(ADD);
      fill((360*j/d_lat)*0.5+200, 100, 100);
    	ellipse(Math.sqrt(radius**2 - (radius*i/d_alt)**2)*Math.sin(2*Math.PI*(j/d_lat + framecount/fr*0.05*(1-i/d_alt))), radius*i/d_alt, r*2*(i/d_alt), r*2*j/d_lat);
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

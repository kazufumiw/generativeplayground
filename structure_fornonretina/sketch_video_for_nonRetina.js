var capture;
var nx = 48;
var ny = 36;
var tile;
var index;
var colour;
var greyscale;
var trans;
var mode = 0;
var count = 0;
var framecount = 0;

function preload(){
	capture = createCapture(VIDEO);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  clear();
	noStroke();
  frameRate(24);
  capture.size(nx, ny);
  capture.hide();
  background(0);
  capture.loadPixels();

  if(windowWidth/nx < windowHeight/ny){
    tile = windowWidth/nx;
	}
	else{
		tile = windowHeight/ny;
	}
  trans = (windowWidth-nx*tile)*0.5;
  console.log(nx, ny, tile, trans);
}

function draw() {
  background(0);
  framecount = framecount + 0.25;
  for(var i = 0; i < nx; i++){
    for(var j = 0; j < ny; j++){
      colorMode(RGB);
      colour = color(capture.get(i, j));
      greyscale = round(red(colour)*0.222+green(colour)*0.707+blue(colour)*0.071);
      rectMode(CORNER);
      if(mode == 0){
        ellipse(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        fill(red(colour), green(colour), blue(colour), 150);
      }
      if(mode == 1){
        ellipse(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        colorMode(HSB, 360, 100, 100, 100);
        fill(framecount%360,70,70);
      }
      if(mode == 2){
        ellipse(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        colorMode(HSB, 360, 100, 100, 100);
        fill(0,0,100);
      }
      else if(mode == 3){
        rect(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        fill(red(colour), green(colour), blue(colour), 150);
      }

      if(mode == 4){
        rect(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        colorMode(HSB, 360, 100, 100, 100);
        fill(framecount%360,70,70,150);
      }
      else if(mode == 5){
        rect(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        colorMode(HSB, 360, 100, 100, 100);
        fill(0,0,100);
      }
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  count = count + 1;
  mode = count%6;
  console.log(count, mode);
}

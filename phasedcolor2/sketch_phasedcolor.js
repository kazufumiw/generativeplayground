var nx;
var ny;
var tilesize = 100;
var transx;
var transy;
var colour;
var greyscale;
var frameCount = 0;
var move_max = 10;
var move;
var shapesize;
var movex;
var movey;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
	blendMode(ADD);
	noStroke();
  frameRate(24);
  background(0);
	nx = int(windowWidth/tilesize);
	ny = int(windowHeight/tilesize);
	//nx = ny;
  transx = (windowWidth-nx*tilesize)*0.5;
	transy = (windowHeight-ny*tilesize)*0.5;
	//noLoop();
}

function draw() {
	frameCount = frameCount + 1;
	//blendMode();
	blendMode(BLEND);
	background(0);

	blendMode(ADD);
	for(var i = 0; i < nx; i++){
    for(var j = 0; j < ny; j++){
			/*
			movex = move_max*(i-nx*0.5)/(nx*0.5)*Math.sin(frameCount/48);
			movey = move_max*(j-ny*0.5)/(ny*0.5)*Math.sin(frameCount/48);
			*/
			/*
			movex = move_max*(tilesize*i-mouseX)/(mouseX)*Math.sin(frameCount/48);
			movey = move_max*(tilesize*j-mouseY)/(mouseY)*Math.sin(frameCount/48);
			*/
			movex = 0.002*move_max*(tilesize*i-mouseX);
			movey = 0.002*move_max*(tilesize*j-mouseY);

			//movey = move_max*(Math.sqrt(Math.pow((i-nx*0.5),2)+Math.pow((j-ny*0.5),2)))/(nx+ny)*Math.sin(frameCount/96);
			/*
			if(i == nx*0.5){
				movex = 0;
			}
			else{
				movex = movex*(i-nx*0.5)/Math.abs(i-nx*0.5);
			}
			if(j == ny*0.5){
				movey = 0;
			}
			else{
				movey = movey*(j-ny*0.5)/Math.abs(j-ny*0.5);
			}
			*/
			shapesize = tilesize;
      rectMode(CORNER);
			fill(255, 0, 0);
			rect(tilesize*i+transx+10+movex, tilesize*j+transy+10+movey, shapesize-10, shapesize-10);
			fill(0, 255, 0);
			rect(tilesize*i+transx+10, tilesize*j+transy+10, shapesize-10, shapesize-10);
			fill(0, 0, 255);
			rect(tilesize*i+transx+10-movex, tilesize*j+transy+10-movey, shapesize-10, shapesize-10);
    }
	}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

var img;
var s = 400;
var ratio;
var nx;
var ny;
var px;
var py;
var index;
var colour;
var greyscale;
var transx;
var transy;
var h_res = 72.0;
var s_res = 10.0;
var b_res = 30.0;
var theta = 0;
var diamiter;

function preload(){
	colorMode(RGB);
	//colorMode(HSB, h_res, s_res, b_res);
	//colorMode(HSB, 100, 100, 100);
	img = loadImage("../images/colorfull.jpg");
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	clear();
	noStroke();
	//colorMode(HSB, h_res, s_res, b_res);
  frameRate(20);
	//noLoop();

	/*resize
	if(windowWidth*0.5/img.width < windowHeight/img.height){
		img.resize(windowWidth*0.5, img.height*(windowWidth*0.5/img.width));
	}
	else{
		img.resize(img.width*(windowHeight/img.height), windowHeight);
	}
	*/

	/*
	ratio = float(img.height)/img.width;
	nx = Math.sqrt(s/ratio);
	ny = Math.sqrt(s*ratio);

	px = img.width/nx;
	py = img.height/ny;

	img.resize(nx, ny);
	*/

	img.loadPixels();
	//transx = (windowWidth*0.5-nx*px)*0.5;
	//transy = (windowWidth*0.5-nx*px)*0.5;
	transx = (windowWidth*0.25 - img.width)*0.5;
	transy = (windowHeight - img.height)*0.5;
	//image(img, 0, transy);
	//console.log(transx, transy);
	//a = RGBtoHSB(color(img.get(0,0)), h_res, s_res, b_res);
	//console.log("return", a);

	//for(var i = 0; i < img.height; i++){
		//colorMode(RGB, 255,255,255);
		//colorMode(RGB);
		//a = RGBtoHSB(color(img.get(i, 0)), h_res, s_res, b_res);
		//console.log(img.get(i, 0));
		//colorMode(HSB, h_res, s_res, b_res);
		//fill(a[0], a[1], a[2]);
		//rect(10, i, 10, 10);
		//for(var j = 0; j < img.width; i++){
			//var a = color(img.get(i, j));
			//console.log(hue(a), saturation(a), brightness(a));
			//fill(hue(a), saturation(a), brightness(a));
			//rect(i, j, 2, 2);
		//}
	//}
	//var a = color(img.get(40, 40));
	//console.log(img.width, img.height);
	//console.log(hue(a), saturation(a), brightness(a));
	//image(img, transx, transy);
	lightslider = createSlider(0, b_res, 5);
	lightslider.position(windowWidth*0.55, windowHeight*0.9);
	lightslider.style('width', str(windowWidth*0.4)+"px");
}

function draw(){
	//clear();
	colorMode(RGB);
	background(255, 255, 255);
	//image(img, 0, transy, 500, 500);
	image(img, 0, transy*0.3, 500, 500);
	ellipseMode(CENTER);
	//fill(0,0,0);
	//ellipse(windowWidth*0.75, windowHeight*0.4, windowWidth*0.4, windowWidth*0.4);
	for(var a = 0; a < img.height; a++){
		for(var b = 0; b < img.width; b++){
			console.log();
			colorMode(RGB);
			var pixel = RGBtoHSB(color(img.get(a, b)), h_res, s_res, b_res);
			colorMode(HSB, h_res, s_res, b_res);
			if(pixel[2] == lightslider.value()){
				diamiter = windowWidth*0.4*(pixel[1]+1.0)/s_res;
				fill(pixel[0], pixel[1], pixel[2]);
				arc(windowWidth*0.75, windowHeight*0.4, diamiter, diamiter, 2*PI*pixel[0]/h_res, 2*PI*pixel[0]/h_res + 2*PI/h_res);
				fill(pixel[0], 0, b_res);
				arc(windowWidth*0.75, windowHeight*0.4, diamiter*pixel[1]/(pixel[1]+1.0), diamiter*pixel[1]/(pixel[1]+1.0), 2*PI*pixel[0]/h_res, 2*PI*pixel[0]/h_res + 2*PI/h_res);
			}
		}
	}
	/*
	for(var i = 0; i < s_res; i++){
		diamiter = windowWidth*0.4*(1.0 - i/s_res);
		for(var j = 0; j < h_res; j++){
			//fill(j, s_res - i, lightslider.value());
			//arc(windowWidth*0.75, windowHeight*0.4, diamiter, diamiter, theta, theta + 2*PI/h_res);
			//theta = theta + 2*PI/h_res;

		}
	}
	*/
	fill(0,0,0);
	text(lightslider.value(), windowWidth*0.52, windowHeight*0.917);
	//background(0);
	/*
	for(var i = 0; i < nx-1; i++){
		for(var j = 0; j < ny-2; j++){
			index = (i+ny*j)*4
			colour = color(img.get(i, j));
			greyscale = round(red(colour)*0.222+green(colour)*0.707+blue(colour)*0.071);
			console.log(i, j, greyscale)
			//rectMode(CENTER);
			//rect(px*i+transx, py*(j+1), py*greyscale/100.0, py*greyscale/100.0);
			ellipse(px*i+transx, py*(j+1)+transy, py*greyscale/100.0, py*greyscale/100.0);
			fill(red(colour), green(colour), blue(colour), 200);
		}
	}
	*/
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

//function RGBtoHSB(color){
function RGBtoHSB(color, h_red, s_red, b_red){
	var r = red(color);
	var g = green(color);
	var b = blue(color);
	var ma = max(r,g,b);
	var mi = min(r,g,b);

	var h;
	var s;
	var v;
	//console.log(r,g,b,Math.max(r,g,b));
	if(r == g && g == b){
		h = 0.0;
		//console.log("max is rgb");
	}
	else if(ma == r){
		h = 60.0*(float(g - b)/(ma - mi));
		//console.log("max is red");
	}
	else if(ma == g){
		h = 60.0*(float(b - r)/(ma - mi)) + 120;
		//console.log("max is green");
	}
	else if(ma == b){
		h = 60.0*(float(r - g)/(ma - mi)) + 240;
		//console.log("max is blue");
	}

	while(h < 0){
		h = h + 360.0;
	}

	h = int(h*h_res/360.0);
	s = int(float(ma-mi)/ma*s_res);
	v = int(ma/255.0*b_res);
	/*
	h = int(h*h_res/360.0);
	s = int(float(ma-mi)/ma*s_res/100.0);
	v = int(ma/255.0*b_res/100.0);
	*/
	//console.log("RGB", r, g, b);
  //console.log("HSB", h, s, v);
	var hsb_out = [h,s,v];

	return hsb_out;
}

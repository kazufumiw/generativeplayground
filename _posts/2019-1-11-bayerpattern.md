---
layout: post
title:  "Bayer Pattern"
categories: p5.js
permalink: /works/bayerpattern
---
# Click to Play
[![image](https://kazufumiw.github.io/generativeplayground/images/bayerpattern.png)](https://kazufumiw.github.io/generativeplayground/bayerpattern/)

# code
```

var capture;
var nx = 96;
var ny = 64;
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
  capture.size(2*nx, 2*ny);
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
			fill(0, green(colour), 0);
			rect(tile*i+trans, tile*j, ((i+j)%2)*tile, ((i+j)%2)*tile);
			fill(red(colour), 0, 0);
      rect(tile*i+trans, tile*j, (i%2)*tile, (j%2)*tile);
			fill(0, 0, blue(colour));
			rect(tile*i+trans, tile*j, ((i+1)%2)*tile, ((j+1)%2)*tile);

    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
```

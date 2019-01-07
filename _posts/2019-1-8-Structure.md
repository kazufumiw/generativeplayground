---
layout: post
title:  "Structure"
categories: p5.js
permalink: /works/structure
---
# Click to Play
[![image](https://kazufumiw.github.io/generativeplayground/images/structure.png)](https://kazufumiw.github.io/generativeplayground/structure/)

# code
```JavaScript

var capture;
var nx = 48;
var ny = 36;
var tile;
var index;
var colour;
var greyscale;
var trans;

function preload(){
	capture = createCapture(VIDEO);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  for(var i = 0; i < nx; i++){
    for(var j = 0; j < ny; j++){
      colour = color(capture.get(i, j));
      greyscale = round(red(colour)*0.222+green(colour)*0.707+blue(colour)*0.071);
      rectMode(CORNER);
      ellipse(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
      fill(red(colour), green(colour), blue(colour), 150);
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
```

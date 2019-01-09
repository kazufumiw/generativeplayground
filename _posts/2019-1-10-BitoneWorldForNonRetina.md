---
layout: post
title:  "Bitone World for non Retina"
categories: p5.js
permalink: /works/bitoneworld_fornonretina
---
# Click to Play
[![image](https://kazufumiw.github.io/generativeplayground/images/bitoneworld.png)](https://kazufumiw.github.io/generativeplayground/bitoneworld_fornonretina/)

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
      }
      else if(mode == 1){
        rect(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
      }
      colorMode(HSB, 600, 100, 100);
      fill(greyscale+310, 100, 100);
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  count = count + 1;
  mode = count%2;
  console.log(count, mode);
}

```

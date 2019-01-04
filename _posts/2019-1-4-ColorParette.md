---
layout: post
title:  "Color Parette"
categories: p5.js
permalink: /works/colorparette
---
# Click to Play
[![image](https://kazufumiw.github.io/generativeplayground/images/colorparette.png)](https://kazufumiw.github.io/generativeplayground/colorparette/)

# code
```JavaScript

var max_res = 50;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0,0,0);
	//rectMode(CENTER);
	colorMode(HSB);
	noStroke();
}

function draw() {
  var res_x = max_res*mouseX/windowWidth + 1;
  var res_y = max_res*mouseY/windowHeight + 1;
  var dx = windowWidth/res_x;
  var dy = windowHeight/res_y;
  for(var i = 0; i < res_y; i += 1){
    for(var j = 0; j < res_x; j += 1){
      fill(360*(j + 1)/res_x, 100*(res_y - i - 1)/res_y, 100)
      rect(dx*j, dy*i, dx, dy);
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //background(0,0,0);
}
```

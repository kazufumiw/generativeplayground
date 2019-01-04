---
layout: post
title:  "Color Balls"
categories: p5.js
---
# Click to Play
[![image](https://kazufumiw.github.io/generativeplayground/images/colorballs.png)](https://kazufumiw.github.io/generativeplayground/colorball/)

# code
```javascript
var fr = 60.0;
var n = 0;
var s = 0.15;
var vr = 0.05;
var p = new Array();
var p_size = new Array();
var p_vel = new Array();
var p_color = new Array();

function setup() {
	createCanvas(windowWidth, windowHeight);
	clear();
  colorMode(HSB, 360, 100, 100, 255);
  frameRate(fr);
}

function draw() {
  clear();
  noStroke();
  for(var i = 0; i < n; i++){
    p[i].add(p_vel[i]);
    fill(p_color[i], 100, 100, 128);
    ellipse(p[i].x, p[i].y, p_size[i]);
    if(p[i].x < p_size[i]*0.5 || windowWidth - p_size[i]*0.5 < p[i].x){
      p_vel[i].x = -p_vel[i].x;
    }
    if(p[i].y < p_size[i]*0.5 || windowHeight - p_size[i]*0.5 < p[i].y){
      p_vel[i].y = -p_vel[i].y;
    }
  }
}

function mouseClicked(){
  p.push(createVector(mouseX, mouseY));
  p_size.push(2*Math.min(mouseX, mouseY, windowWidth - mouseX, windowHeight - mouseY, s*windowWidth, s*windowHeight)*Math.random());
  p_vel.push(createVector(vr*windowWidth*2*(Math.random()-0.5)/fr, vr*windowHeight*2*(Math.random()-0.5)/fr));
  p_color.push(Math.random()*360);
  n = n+1;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
```

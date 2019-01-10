var max_res = 50;
var tilesize = 50;
var n = 10;
var c = 6

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100);
	background(0,0,100);
	noStroke();
	color_1 = [[360*Math.random(), 100*Math.random(), 100*Math.random()], [360*Math.random(), 100*Math.random(), 100*Math.random()], [360*Math.random(), 100*Math.random(), 100*Math.random()], [360*Math.random(), 100*Math.random(), 100*Math.random()], [360*Math.random(), 100*Math.random(), 100*Math.random()], [360*Math.random(), 100*Math.random(), 100*Math.random()]];
	color_2 = [[360*Math.random(), 100*Math.random(), 100*Math.random()], [360*Math.random(), 100*Math.random(), 100*Math.random()], [360*Math.random(), 100*Math.random(), 100*Math.random()], [360*Math.random(), 100*Math.random(), 100*Math.random()], [360*Math.random(), 100*Math.random(), 100*Math.random()], [360*Math.random(), 100*Math.random(), 100*Math.random()]];
}

function draw() {
	for(var i = 0; i < c; i++){
		for(var j = 0; j < n; j++){
			fill((n-1-j)/(n-1)*color_1[i][0]+j/(n-1)*color_2[i][0], (n-1-j)/(n-1)*color_1[i][1]+j/(n-1)*color_2[i][1], (n-1-j)/(n-1)*color_1[i][2]+j/(n-1)*color_2[i][2]);
			rect(tilesize*j, tilesize*i, tilesize, tilesize)

		}
	}
	/*
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
	*/
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //background(0,0,0);
}

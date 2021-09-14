/*
	Written By Logan Haug
	A poor rendition of John Conway's Game Of Life
    written in P5-JS
*/
class tile {
    constructor(x, y, w) {
      this.x = x;
      this.y = y;
      this.w = w;
    }
    draw() {
        rect(this.x, this.y, this.w, this.w);
    }
}

class grid {
	constructor(){
		this.tiles = [];
	}
	draw() {
		for (let i = 0; i < this.tiles.length; i++) {
			this.tiles[i].draw()
		}
	}
	gen_tiles(w, num) {
		for (let i = 0; i < num; i++) {
			this.tiles.push(new tile(i * (w + 10) + 10, 10, w));
		}
	}
}

/* Sleep function **/
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Flags the canvas
let cnv;

/* Centers the canvas */
function centerCanvas() {
	// Centers the canvas
	cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}

/* Recenters the canvas on window re-size */
function windowResized() {
	centerCanvas();
}

let test;
/* p5 Setup function */
function setup() {
	// Create the canvas
	cnv = createCanvas(windowWidth, windowHeight);
	// Center the Canvas
	centerCanvas();
	test = new grid();
	test.gen_tiles(50, 5);
}

/* p5 draw function */
function draw() {
	// Remove the ugly stroke from the rectangle
	noStroke();
	// Set the background to black
	background(0);
	fill(color(255, 255, 255));
	test.draw();
	sleep(0.5);
}
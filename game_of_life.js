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
	  this.color = color(0, 0, 0);
	  this.state = -1;	//-1 off, 1 on
    }
    draw() {
		fill(this.color);
        rect(this.x, this.y, this.w, this.w, 10);
    }
	toggle() {
		if (this.state == -1) {
			this.state = 1;
			this.color = color(255, 255, 255);
		} else {
			this.state = -1;
			this.color = color(0, 0, 0);
		}
	}
}

const offset = 10;
const w = 50;

class grid {
	constructor(){
		this.tiles = [];
	}
	draw() {
		for (let i = 0; i < this.tiles.length; i++) {
			this.tiles[i].draw()
		}
	}
	gen_tiles() {
		var rects_per_row = Math.floor(windowWidth / (offset + w));
		var num_rows = Math.floor(windowHeight / (offset + w));
		for (var row = 0; row < num_rows; row++) {
			for (var rect = 0; rect < rects_per_row; rect++) {
				this.tiles.push(new tile(offset + offset * rect + w * rect,  offset + offset * row + w * row, w));
			}
		}
	}
	toggle(x, y) {
		var g_tile;
		for (var grid_tile in this.tiles) {
			g_tile = this.tiles[grid_tile];

			if (x < g_tile.x ||
				x > (g_tile.x + w) ||
				y < g_tile.y ||
				y > (g_tile.y + w)) {
				continue;
			}
			g_tile.toggle();
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

/* p5 Setup function */
let my_grid;
function setup() {
	// Create the canvas
	cnv = createCanvas(windowWidth, windowHeight);
	// Center the Canvas
	centerCanvas();
	my_grid = new grid();
	my_grid.gen_tiles();
}

/* p5 draw function */
function draw() {
	// Pure white stroke
	stroke(255, 255, 255);
	// Set the background to black
	background(0);
	my_grid.draw();
	sleep(0.5);
}

function mousePressed() {
	my_grid.toggle(mouseX, mouseY);
}
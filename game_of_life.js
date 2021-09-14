/*
	Written By Logan Haug
	A poor rendition of John Conway's Game Of Life
    written in P5-JS
*/

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
async function setup() {
	// Create the canvas
	cnv = createCanvas(windowWidth, windowHeight);
	// Center the Canvas
	centerCanvas();
}

/* p5 draw function */
function draw() {
	// Remove the ugly stroke from the rectangle
	noStroke();
	// Set the background to black
	background(0);
}
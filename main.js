//Create a reference for canvas 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var roverwidth = 100;
var roverheight = 150;
var rover_X = 10;
var rover_Y = 10;
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	backgroundimg = new Image()
    backgroundimg.onload = upload_background;
    backgroundimg.src = background_image;
    roverimg = new Image();
    roverimg.onload = uploadgreencar;
    roverimg.src = greencar_image;
}

function upload_background() {
	//Define function ‘uploadBackground’
	ctx.drawImage(backgroundimg, 0, 0, canvas.clientWidth, canvas.clientHeight)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(roverimg, rover_X, rover_Y, roverwidth, roverheight);
}
	



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
function up() {
    if (rover_Y >= 5) {
        rover_Y = rover_Y - 10;
        upload_background();
        uploadgreencar();
    }
}

function down() {
    if (rover_Y <= 500) {
        rover_Y = rover_Y + 10;
        upload_background();
        uploadgreencar();
    }
}

function left() {
    if (rover_X >= 0) {
        rover_X = rover_X - 10;
        upload_background();
        uploadgreencar();
    }
}

function right() {
    if (rover_X <= 700) {
        rover_X = rover_X + 10;
        upload_background();
        uploadgreencar();
    }
}
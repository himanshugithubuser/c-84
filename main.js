canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
background_image = "mars.jpg";
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
 
function add(){
    backdrop_image = new Image();//Defining a variable with a new image//
    backdrop_image.onload = uploadBackground;//Setting a function, onlaoding this variable//
    backdrop_image.src = background_image;//Load image//
    image_rover = new Image();//Defining a variable with a new image//
    image_rover.onload = uploadRover;//Setting a function, onlaoding this variable//
    image_rover.src = rover_image; //Load image//
}

function uploadBackground(){
    ctx.drawImage(backdrop_image, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(image_rover, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", key_down);

function key_down(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
    }
    if(keyPressed=="37"){
        left();
        console.log("left");
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y>=0){
        rover_y = rover_y-10;
        console.log("when up arrow is pressed, x="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y = rover_y+10;
        console.log("when down arrow is pressed, x="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x = rover_x-10;
        console.log("when left arrow is pressed, x="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x = rover_x+10;
        console.log("when right arrow is pressed, x="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
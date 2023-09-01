var canvas = new fabric.Canvas('myCanvas')

ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;


block_image_width = 5;
block_image_height = 5;

function load_img() {
    new_image();
}

function new_image() {
    fabric.Image.fromURL("golf-h1.png", function(Img)) {
        hole_obj = Img;
        hole_obj.scaleToWidth(50)
        hole_obj.scaleToHeight(50)
        hol_obj.set({
            top: hole_y;
            left: hole_x;
        })
        canvas.add(ball_obj);

    }
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (ball_x == hole_x) && (ball_y = hole_y) {
        canvas.remove(ball_obj);
    }

    else {
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }

    function up() {
        if (ball_x, >= 450) {
            ball_x = ball_x + block_image_height;
            console.log("block_image_height = " + block_image_height);
            console.log("When up arrow key is pressed, X=" + ball + ",Y=" + ball_y);
            canvas.remove(ball_obj);
            new_image;
        }
    }

    function down() {

        if (ball_y, <= 450) {
            ball_y = ball_y + block_image_height;
            console.log("block_image_height = " + block_image_height);
            console.log("When down arrow key is pressed, X=" + ball + ",Y=" + ball_y);
            canvas.remove(ball_obj);
            new_image;
        }
    }

    function left() {
        if (ball_x > 5) {
            ball_y = ball_y + block_image_width;
            console.log("block_image_width = " + block_image_width);
            console.log("When left arrow key is pressed, X=" + ball + ",Y=" + ball_y);
            canvas.remove(ball_obj);
            new_image;
        }
    }
}

function right() {
    if (ball_x <= 1050) {
        if (ball_x, >= 450) {
            ball_x = ball_x + block_image_width;
            console.log("block_image_width = " + block_image_width);
            console.log("When right arrow key is pressed, X=" + ball + ",Y=" + ball_y);
            canvas.remove(ball_obj);
            new_image;
        }
    }
}

}
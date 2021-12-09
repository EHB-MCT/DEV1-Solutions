"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let isPlaying = true;
let xCar1 = 0;
let speedCar1 = 5;
let xCar2 = width - 200;
let speedCar2 = -5;

let speed = 20;
let x = width / 2;
let y = height - 75;

context.textAlign = "center";
context.font = "bold 78pt Arial";
document.onkeydown = getKey;

/**
 * 
 * @param {KeyboardEvent} e 
 */
function getKey(e) {
    console.log(e.key);
    if (e.key == "ArrowUp") {
        if (y <= 75) {
            isPlaying = false;
            context.fillStyle = "darkgreen";
            context.fillText("YOU WON", width / 2, height / 2 + 50);
        }
        y -= speed;
    }

    if (e.key == "ArrowLeft") {
        x -= speed;
    }

    if (e.key == "ArrowRight") {
        x += speed;
    }

}

main();

function main() {
    if (isPlaying) {
        drawRoad();
        moveCars();
        drawTurtle();
        drawCar(xCar1, 225);
        drawCar(xCar2, 525);
        checkCollision();
        requestAnimationFrame(main);
    }
}

function checkCollision() {
    if ((x - 30 > xCar1 && x + 30 < xCar1 + 200) && (y - 25 > 225 && y + 25 < 325)) {
        showYouLose();
    } else if ((x - 30 > xCar2 && x + 30 < xCar2 + 200) && (y - 25 > 525 && y + 25 < 625)) {
        showYouLose();
    }
}

function showYouLose() {
    isPlaying = false;
    context.fillStyle = "red";
    context.fillText("YOU LOSE!!!", width / 2, height / 2 + 50);
}

function moveCars() {
    console.log(speedCar1);
    if (xCar1 > width - 200) {
        speedCar1 *= -1;
        speedCar2 *= -1;
    } else if (xCar1 < 0) {
        speedCar1 *= -1;
        speedCar2 *= -1;
    }
    xCar1 += speedCar1;
    xCar2 += speedCar2;
}

function drawCar(x, y) {
    context.fillStyle = "red";
    context.fillRect(x, y, 200, 100);
    context.fillStyle = "lightblue";
    context.fillRect(x + 10, y + 10, 30, 80);
    context.fillRect(x + 130, y + 10, 60, 80);
}

function drawRoad() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 3; i++) {
        if (i % 2 == 0) {
            context.fillStyle = "gray";
        } else {
            context.fillStyle = "lightGray";
        }
        context.fillRect(0, 200 + i * 150, width, 150);
    }
}

function drawTurtle() {
    context.fillStyle = "darkgreen";
    Utils.fillCircle(x, y, 30);
    Utils.fillCircle(x, y - 40, 20);
    Utils.fillCircle(x - 30, y - 25, 10);
    Utils.fillCircle(x - 30, y + 25, 10);
    Utils.fillCircle(x + 30, y - 25, 10);
    Utils.fillCircle(x + 30, y + 25, 10);
}
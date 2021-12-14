"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPos = [];
let total = 50;
let space = height / total;
let activeRace = true;


setup();
draw();

function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
    for (let i = 0; i < total; i++) {
        xPos[i] = 0;
    }
}

function draw() {
    if (activeRace) {
        for (let i = 0; i < xPos.length; i++) {
            if (xPos[i] >= width - space * 2 / 3) {
                activeRace = false;
                context.fillStyle = "darkred";
                context.font = "bold " + 50 + "pt Arial";
                context.fillText("Snail " + (i + 1) + " has won!!!", width / 2, height / 2);
                break;
            }
            if (i % 2 == 0) {
                context.fillStyle = "gray";
            } else {
                context.fillStyle = "lightgray";
            }
            context.fillRect(0, i * space, width, space);
            drawSnail(xPos[i], space / 2 + i * space, space, i + 1);
            xPos[i] += Utils.randomNumber(0, 5);
        }
        requestAnimationFrame(draw);
    }
}

function drawSnail(x, y, sizeY, number) {

    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
}
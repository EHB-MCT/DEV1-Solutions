"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let xPositions = [];
let yPositions = [];

document.onmousemove = move;

//Kan ook met push en shift gedaan worden
function move(e) {
    for (let i = 99; i > 0; i--) {
        if (i != 99) {
            xPositions[i] = xPositions[i - 1];
            yPositions[i] = yPositions[i - 1];
        }
    }
    xPositions[0] = e.pageX;
    yPositions[0] = e.pageY;
}

draw();

function draw() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    for (let i = 99; i >= 0; i--) {
        context.fillStyle = Utils.hsla(0, 0, i, 50);
        Utils.fillCircle(xPositions[i], yPositions[i], 25 - i / 4);
    }
    requestAnimationFrame(draw);
}
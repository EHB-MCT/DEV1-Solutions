"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let size = 50;
let x = Utils.randomNumber(size, width - size);
let y = Utils.randomNumber(size, height - size);
let hSpeed = 15;
let vSpeed = 15;
let isPlaying = true;

document.onmousedown = click;

/**
 * 
 * @param {MouseEvent} e 
 */
function click(e) {
    console.log(e.pageX + " " + e.pageY);
    if (Utils.calculateDistance(e.pageX, e.pageY, x, y) < size) {
        isPlaying = false;
        context.fillStyle = "red";
        Utils.fillCircle(e.pageX, e.pageY, size / 2);
    }
}

draw();

function draw() {
    if (isPlaying) {
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        context.fillStyle = "blue";
        Utils.fillCircle(x, y, size);
        x += hSpeed;
        y += vSpeed;
        if (x >= width - size || x <= size) {
            hSpeed *= -1;
        }
        if (y >= height - size || y <= size) {
            vSpeed *= -1;
        }
        requestAnimationFrame(draw);
    }
}
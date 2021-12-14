"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let y = [];
let curr = 0;
let frame = 0;

setup();

function setup() {
    context.fillStyle = "black";
    context.lineWidth = 2;
    for (let i = 0; i < 100; i++) {
        y[i] = Math.random() * height;
    }
}

draw();

function draw() {
    let space = width / y.length;

    for (let i = 0; i < y.length; i++) {
        if (curr != 0) {
            context.beginPath();
            context.moveTo(space + (curr - 1) * space, y[curr - 1]);
            context.lineTo(space + curr * space, y[curr]);
            context.stroke();
        }
        if (i == curr) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "black";
        }

        Utils.fillCircle(space + i * space, y[i], space / 2);

    }
    if (frame % 20 == 0) {
        if (curr < y.length) {
            curr++;
        } else {
            curr = 0;
        }
    }

    frame++;
    console.log(curr);
    requestAnimationFrame(draw);
}
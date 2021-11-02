"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
    context.fillRect(0, 0, width, height);
    drawBubbles();
}

function drawBubbles() {
    for (let i = 0; i < 100; i++) {
        let x = Utils.randomNumber(200, width - 200);
        let y = Utils.randomNumber(200, height - 200);
        let size = Utils.randomNumber(10, 100);
        context.fillStyle = Utils.hsla(Utils.randomNumber(0, 180), 75, 50, 50);
        Utils.fillCircle(x, y, size);
    }
}
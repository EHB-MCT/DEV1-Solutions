"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawShrinkingBars();
}

function drawShrinkingBars() {
    let i = 0;
    while (i <= 14) {
        let gray = 255 - i / 14 * 255;
        context.fillStyle = Utils.rgb(gray, gray, gray);
        context.fillRect(50 + i * 20, 50 + i * 10, 10, 300 - i * 20);
        i = i + 1;
    }
}
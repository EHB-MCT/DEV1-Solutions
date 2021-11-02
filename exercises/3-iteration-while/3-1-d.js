"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalLines();
}

function drawDiagonalLines() {
    let i = 0;
    while (i <= 6) {
        let x1 = 50 + i * 25;
        let y1 = 200 + i * 25;
        let x2 = 200 + i * 25;
        let y2 = 50 + i * 25;
        Utils.drawLine(x1, y1, x2, y2);
        i = i + 1;
    }
}
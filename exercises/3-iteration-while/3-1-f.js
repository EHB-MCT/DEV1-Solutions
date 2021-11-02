"use strict";
import context from "../../scripts/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 0;
    while (i <= 6) {
        context.strokeRect(75 + i * 25, 75 + i * 25, 100, 100);
        i = i + 1;
    }
}
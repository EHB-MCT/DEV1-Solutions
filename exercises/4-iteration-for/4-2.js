"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawBricks();

function drawBricks() {
    let rows = 6;
    let columns = 6;
    let w = 100;
    let h = 50;
    let margin = 50;
    context.fillStyle = "darkred";
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let x = margin + i * (w + 5) + j % 2 * 50;
            let y = margin + j * (h + 5);
            context.fillRect(x, y, w, h);
        }
    }

}
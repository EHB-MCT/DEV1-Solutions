"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let centerX = width / 2;
let centerY = height / 2;

drawPoster();

function drawPoster() {
    context.textAlign = "center";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "white";
    context.fillRect(centerX - 400, centerY - 400, 800, 800);
    context.fillStyle = "black";

    for (let i = 0; i < 250; i++) {
        let color = Utils.hsla(0, 0, Utils.randomNumber(0, 100), Utils.randomNumber(0, 100));
        let y = Utils.randomNumber(centerY - 400, centerY + 350);
        let yOff = Utils.randomNumber(1, 50);
        let y2 = Utils.randomNumber(centerY - 400, centerY + 350);
        let yOff2 = Utils.randomNumber(1, 50);
        context.fillStyle = color;
        fillQuad(centerX - 400, y, centerX - 400, y + yOff, centerX + 400, y2, centerX + 400, y2 + yOff2);
        context.font = "normal " + Utils.randomNumber(8, 76) + "pt Arial";
        context.fillText("MCT", Utils.randomNumber(centerX - 300, centerX + 300), Utils.randomNumber(centerY - 300, centerY + 300));
    }

    context.fillStyle = "red";
    context.font = "bold 78pt Arial";
    context.fillText("ehb", centerX, centerY - 95);
    context.fillStyle = "white";
    context.font = "bold 64pt Arial";
    context.fillText("is da shit", centerX, centerY + 150);
    context.fillStyle = "black";
    context.font = "bold 120pt Arial";
    context.fillText("MCT", centerX, centerY + 60);
    fillTriangle(centerX - 401, centerY - 401, centerX, centerY - 401, centerX - 401, centerY);
    fillTriangle(centerX + 401, centerY - 401, centerX, centerY - 401, centerX + 401, centerY);
    fillTriangle(centerX - 401, centerY + 401, centerX, centerY + 401, centerX - 401, centerY);
    fillTriangle(centerX + 401, centerY + 401, centerX, centerY + 401, centerX + 401, centerY);
}

function fillQuad(x1, y1, x2, y2, x3, y3, x4, y4) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.lineTo(x4, y4);
    context.closePath();
    context.fill();
}

function fillTriangle(x1, y1, x2, y2, x3, y3) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();
    context.fill();
}
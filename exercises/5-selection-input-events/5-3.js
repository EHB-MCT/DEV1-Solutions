'use strict';
import context from "../../context/context.js";
import * as Utils from "../../context/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

reset();
document.getElementById("draw").onclick = drawCards;

function drawCards() {
    reset();
    let input1 = Number(document.getElementById("input1").value);
    let r = Utils.randomNumber(0, input1);
    for (let i = 0; i < input1; i++) {
        drawCard(75 + i % 10 * 125, 150 + Math.floor(i / 10) * 175, r == i);
    }
}

function reset() {
    context.fillStyle = "seagreen";
    context.fillRect(0, 0, width, height);
}

function drawCard(x, y, pick) {
    let r = Math.floor(Math.random() * 13 + 1);
    context.lineWidth = 2;
    if (pick) {
        context.fillStyle = "yellow";
    } else {
        context.fillStyle = "white";
    }
    context.beginPath();
    context.rect(x - 50, y - 50, 100, 150);
    context.fill();
    context.stroke();
    context.textAlign = "center";
    context.font = "bold 32pt Arial";
    drawRandomShape(x, y);
    if (r <= 10) {
        context.fillText(r, x, y + 75);
    } else if (r == 11) {
        context.fillText("J", x, y + 75);
    } else if (r == 12) {
        context.fillText("Q", x, y + 75);
    } else if (r == 13) {
        context.fillText("K", x, y + 75);
    }

}

function drawRandomShape(x, y) {
    let r = Math.floor(Math.random() * 4);
    if (r == 0) {
        context.fillStyle = "red";
        drawHeart(x, y);
    } else if (r == 1) {
        context.fillStyle = "red";
        drawDiamond(x, y);
    } else if (r == 2) {
        context.fillStyle = "black";
        drawClover(x, y);
    } else if (r == 3) {
        context.fillStyle = "black";
        drawPike(x, y);
    }
}

function drawHeart(x, y) {
    context.beginPath();
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x + 40, y - 15, x, y + 20);
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x - 40, y - 15, x, y + 20);
    context.fill();
}

function drawClover(x, y) {
    Utils.fillCircle(x - 10, y + 5, 10);
    Utils.fillCircle(x + 10, y + 5, 10);
    Utils.fillCircle(x, y - 10, 10);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();

}

function drawPike(x, y) {
    context.beginPath();
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x + 40, y + 20, x, y + 10);
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x - 40, y + 20, x, y + 10);
    context.fill();
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();
}

function drawDiamond(x, y) {
    context.beginPath();
    context.moveTo(x - 20, y);
    context.lineTo(x, y - 20);
    context.lineTo(x + 20, y);
    context.lineTo(x, y + 20);
    context.fill();
}
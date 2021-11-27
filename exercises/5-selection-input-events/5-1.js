'use strict';
import context from "../../context/context.js";
import * as Utils from "../../context/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawDotsE();

function drawDotsA() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 100000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        if (x < width / 2) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "green";
        }
        Utils.fillCircle(x, y, 2);
    }
}

function drawDotsB() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 100000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        if (y > height / 3 * 2) {
            context.fillStyle = "blue";
        } else if (y > height / 3) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "red";
        }
        Utils.fillCircle(x, y, 2);
    }
}

function drawDotsC() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 100000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        if (x > width / 4 * 3) {
            context.fillStyle = "yellow";
        } else if (x > width / 4) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "red";
        }
        Utils.fillCircle(x, y, 2);
    }
}

function drawDotsD() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 100000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        if (x < width / 4 * 3 && y < height / 4 * 3 && x > width / 4 && y > height / 4) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "blue";
        }
        Utils.fillCircle(x, y, 2);
    }
}

function drawDotsE() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 100000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        if (calculateDistance(x, y, width / 2, height / 2) < height / 3) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "white";
        }
        Utils.fillCircle(x, y, 2);
    }
}

function calculateDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}
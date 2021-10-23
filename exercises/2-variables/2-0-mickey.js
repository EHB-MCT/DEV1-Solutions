"use strict";
/** @type {CanvasRenderingContext2D} */
let context;

setup();
drawMultipleMickeys();

function setup() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function drawMultipleMickeys() {
    //get the width & height of the canvas
    let width = context.canvas.width;
    let height = context.canvas.height;

    //draw one big mickey in the center of the windows
    context.fillStyle = "black";
    drawMickey(width / 2, height / 2, 100);

    //draw 4 random small mickey's
    context.fillStyle = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
    drawMickey(Math.random() * width, Math.random() * height, 50);
    drawMickey(Math.random() * width, Math.random() * height, 50);
    drawMickey(Math.random() * width, Math.random() * height, 50);
    drawMickey(Math.random() * width, Math.random() * height, 50);
}

function drawMickey(x, y, size) {

    //eerst met variabelen daarna pas parameters
    let half = size / 2;
    fillCircle(x, y, size);
    fillCircle(x - size, y - size, half);
    fillCircle(x + size, y - size, half);
}

function fillCircle(x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2);
    context.fill();
}
"use strict";
/** @type {CanvasRenderingContext2D} */
let context;

setup();
drawPyramid();

function setup() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function drawPyramid() {
    drawSquare(0, 800);
    drawSquare(50, 700);
    drawSquare(100, 600);
    drawSquare(150, 500);
    drawSquare(200, 400);
    drawSquare(250, 300);
    drawSquare(300, 200);
    drawSquare(350, 100);
}

function drawSquare(pos, size) {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;

    context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    context.fillRect(100 + pos, 100 + pos, size, size);
}
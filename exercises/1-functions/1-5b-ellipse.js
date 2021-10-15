"use strict";

drawSunset2();

function drawSunset2() {
    //get canvas context
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //draw evening sky
    context.fillStyle = "orange";
    context.fillRect(50, 50, 300, 300);
    //draw sun
    context.fillStyle = "yellow";
    context.ellipse(200, 250, 100, 50, 0, 0, Math.PI * 2, true);
    context.fill();
    //draw sea
    context.fillStyle = "blue";
    context.fillRect(50, 250, 300, 100);
}
"use strict";

drawSunset();

function drawSunset() {
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
    context.beginPath();
    context.arc(200, 250, 100, 0, Math.PI, true);
    context.fill();
    //draw sea
    context.fillStyle = "blue";
    context.fillRect(50, 250, 300, 100);
}
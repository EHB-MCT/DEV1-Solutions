"use strict";

drawRectangles();

function drawRectangles() {
    //get canvas context
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //draw the red empty squares
    context.strokeStyle = "red";
    context.strokeRect(50, 50, 150, 150);
    context.strokeRect(200, 200, 150, 150);
    context.strokeRect(75, 275, 50, 50);
    context.strokeRect(275, 75, 50, 50);

    //draw the black squares
    context.fillRect(50, 325, 25, 25);
    context.fillRect(325, 50, 25, 25);

    //draw the big square
    context.beginPath();
    context.rect(125, 125, 150, 150);
    context.fill();
    context.stroke();
}
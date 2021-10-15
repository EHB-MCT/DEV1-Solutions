"use strict";

drawFish();

function drawFish() {
    //get canvas context
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");
    //set line thickness to 5
    context.lineWidth = 5;
    //define the lines that will connect the dots
    context.moveTo(52, 390);
    context.lineTo(395, 90);
    context.lineTo(552, 320);
    context.lineTo(722, 222);
    context.lineTo(656, 395);
    context.lineTo(727, 555);
    context.lineTo(562, 457);
    context.lineTo(405, 620);
    //draw the lines
    context.stroke();
}
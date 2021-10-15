"use strict";

drawStarryNight();

function drawStarryNight() {
    //get canvas context
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 10;

    //Star shape
    context.fillStyle = "orange";
    context.beginPath();
    context.arc(50, 50, 200, 0, Math.PI / 3);
    context.arc(50, 450, 200, Math.PI * 2 * 3 / 4, 0);
    context.arc(450, 450, 200, Math.PI, Math.PI * 2 * 3 / 4);
    context.arc(450, 50, 200, Math.PI / 2, Math.PI);
    context.fill();

    //crossing lines
    context.strokeStyle = "white";
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(450, 450);
    context.moveTo(100, 50);
    context.lineTo(450, 400);
    context.moveTo(150, 50);
    context.lineTo(450, 350);
    context.moveTo(50, 100);
    context.lineTo(400, 450);
    context.moveTo(50, 150);
    context.lineTo(350, 450);
    context.moveTo(50, 450);
    context.lineTo(450, 50);
    context.moveTo(100, 450);
    context.lineTo(450, 100);
    context.moveTo(150, 450);
    context.lineTo(450, 150);
    context.moveTo(50, 400);
    context.lineTo(400, 50);
    context.moveTo(50, 350);
    context.lineTo(350, 50);
    context.stroke();

    //center diamond shape
    context.beginPath();
    context.moveTo(250, 205);
    context.lineTo(295, 250);
    context.lineTo(250, 295);
    context.lineTo(205, 250);
    context.fill();

    //big square
    context.strokeStyle = "orange";
    context.strokeRect(50, 50, 400, 400);

    //text
    context.textAlign = "center";
    context.font = "normal 40pt Arial";
    context.fillText("STARRY NIGHT", 250, 500);

}
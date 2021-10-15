"use strict";

drawPizza();

function drawPizza() {
    //get canvas context
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //Draw pizza with crust
    context.fillStyle = "orange";
    context.strokeStyle = "brown";
    context.lineWidth = 30;
    context.beginPath();
    context.arc(250, 250, 200, Math.PI, Math.PI * 3 / 2);
    context.stroke();
    context.lineTo(250, 250);
    context.fill();

    // Draw pepperoni's on the pizza
    context.fillStyle = "red";
    context.beginPath();
    context.arc(200, 125, 20, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "darkred";
    context.beginPath();
    context.arc(125, 225, 20, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "maroon";
    context.beginPath();
    context.arc(125, 150, 20, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "brown";
    context.beginPath();
    context.arc(200, 200, 20, 0, Math.PI * 2);
    context.fill();
}
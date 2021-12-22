'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let triangles = [];

setup();
update();

function setup() {
    for (let i = 0; i < 500; i++) {
        let x1 = Math.random() * width;
        let y1 = Math.random() * height;
        //we have to define these variables first, 
        //because you can't use the this keyword from a property initialisation
        let x2 = x1 + Math.random() * 100 - 50;
        let y2 = y1 + Math.random() * 100 - 50;
        let x3 = x1 + Math.random() * 100 - 50;
        let y3 = y1 + Math.random() * 100 - 50;

        let triangle = {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            x3: x3,
            y3: y3,
            color: context.fillStyle = Utils.hsla(Math.random() * 100 + 100, 70, 50, 50),
            shake: function () {
                triangles[i].x1 += Utils.randomNumber(-2, 2);
                triangles[i].y1 += Utils.randomNumber(-2, 2);
                triangles[i].x2 += Utils.randomNumber(-2, 2);
                triangles[i].y2 += Utils.randomNumber(-2, 2);
                triangles[i].x3 += Utils.randomNumber(-2, 2);
                triangles[i].y3 += Utils.randomNumber(-2, 2);
                context.fillStyle = triangles[i].color;
                drawTriangle(triangles[i].x1, triangles[i].y1, triangles[i].x2, triangles[i].y2, triangles[i].x3, triangles[i].y3);
            }
        };

        triangles.push(triangle);
    }
}

function update() {
    context.fillStyle = Utils.hsl(180, 70, 30);
    context.fillRect(0, 0, width, height);
    drawTriangles();
    requestAnimationFrame(update);
}

function drawTriangles() {

    for (let i = 0; i < triangles.length; i++) {
        triangles[i].shake();
    }
}

function drawTriangle(x1, y1, x2, y2, x3, y3) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.fill();
}
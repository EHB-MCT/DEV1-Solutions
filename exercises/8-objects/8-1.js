'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = mouseMove;

let balloons = [];

let windSpeed = 2;

setup();
update();

function setup() {
    context.lineWidth = 3;
    for (let i = 0; i < 100; i++) {
        createBalloon();
    }

}

function createBalloon() {
    let balloon = {
        x: Utils.randomNumber(0, width),
        y: height + 50 + Utils.randomNumber(-25, 25),
        speed: Utils.randomNumber(1, 7),
        hue: Utils.randomNumber(0, 60),
        fly: function () {
            this.y -= this.speed;
            this.x += Utils.randomNumber(-2, 2) + windSpeed;
            drawBalloon(this.x, this.y, this.hue);
        }
    };
    balloons.push(balloon);
}

function update() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < balloons.length; i++) {
        balloons[i].fly();
    }
    requestAnimationFrame(update);
    console.log(balloons);
}

function drawBalloon(x, y, hue) {
    context.fillStyle = Utils.hsl(hue, 100, 50);
    context.beginPath();
    context.moveTo(x, y + 50);
    context.lineTo(x, y + 100);
    // context.bezierCurveTo(x + Math.sin(y / 10 + 2) * 25, y + 75, x + Math.sin(y / 10) * 25, y + 100, x + Math.sin(y / 10 + 1) * 25, y + 125);
    context.stroke();
    Utils.fillEllipse(x, y, 30, 50);
}

/**
 * 
 * @param {MouseEvent} e 
 */
function mouseMove(e) {
    windSpeed = (width / 2 - e.pageX) / 100;
}
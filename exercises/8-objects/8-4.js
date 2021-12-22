'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let snowflakes = [];

let width = context.canvas.width;
let height = context.canvas.height;
let frameCount = 0;
let wind = 2;
let sat = 0;

setup();
update();

function setup() {
    window.onmousemove = mouseMove;
    context.textAlign = "center";
    for (let i = 0; i < 250; i++) {
        snowflakes.push(createSnowflake());
    }
}

/**
 * 
 * @param {MouseEvent} eventData 
 */
function mouseMove(eventData) {
    let xOffset = width / 2 - eventData.pageX;
    wind = xOffset / 100;
    sat = eventData.pageY / 2;
}

function createSnowflake() {
    let s = Math.random() * 50 + 5;
    return {
        x: Math.random() * (width + 600) - 600,
        y: 0 - s,
        size: s,
        speed: Math.random() * 4 + 1,
        opacity: Math.random() * 60 + 20,
        fallDown: function () {
            this.size -= 0.05;
            this.y += this.speed;
            this.x += Math.random() * 2 - 1 + wind;
            this.opacity -= 0.1;
            context.strokeStyle = Utils.hsla(200, 100, 100 - sat / height * 100, this.opacity);
            drawSnowflake(this.x, this.y, this.size);
        }
    };
}

function drawSnowflake(x, y, size) {
    let half = size / 2;
    let third = size / 3;
    context.lineWidth = size / 5;
    context.beginPath();
    context.moveTo(x, y - half);
    context.lineTo(x, y + half);
    context.moveTo(x - half, y);
    context.lineTo(x + half, y);
    context.moveTo(x - third, y - third);
    context.lineTo(x + third, y + third);
    context.moveTo(x - third, y + third);
    context.lineTo(x + third, y - third);
    context.stroke();
}

function update() {
    snowflakes.push(createSnowflake());
    snowflakes.push(createSnowflake());
    context.fillStyle = Utils.hsl(180, 70, 30);
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < snowflakes.length; i++) {
        if (snowflakes[i].y > height + snowflakes[i].size) {
            snowflakes.splice(i, 1);
        }
        snowflakes[i].fallDown();
    }
    requestAnimationFrame(update);
}
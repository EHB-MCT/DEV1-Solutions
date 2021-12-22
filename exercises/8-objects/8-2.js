'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onkeydown = keyDown;

let bubbles = [];

setup();
draw();

function setup() {
    for (let i = 0; i < 5; i++) {
        addBubble();
    }
}

function draw() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
    }

    requestAnimationFrame(draw);
}

/**
 * 
 * @param {KeyboardEvent} e 
 */
function keyDown(e) {
    addBubble();
}

function addBubble() {
    let randomSize = Utils.randomNumber(5, 50);
    let bubble = {
        size: randomSize,
        color: Utils.hsl(Utils.randomNumber(0, 360), 70, 50),
        x: Utils.randomNumber(randomSize, width - randomSize),
        y: Utils.randomNumber(randomSize, height - randomSize),
        hSpeed: Utils.randomNumber(-20, 20),
        vSpeed: Utils.randomNumber(-20, 20),
        move: function () {
            context.fillStyle = this.color;
            Utils.fillCircle(this.x, this.y, randomSize);
            this.x += this.hSpeed;
            this.y += this.vSpeed;
            if (this.x >= width - randomSize || this.x <= randomSize) {
                this.hSpeed *= -1;
            }
            if (this.y >= height - randomSize || this.y <= randomSize) {
                this.vSpeed *= -1;
            }
        }
    };
    bubbles.push(bubble);
}
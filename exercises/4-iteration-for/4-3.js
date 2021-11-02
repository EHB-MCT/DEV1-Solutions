"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles6();

function drawCircles1() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = i * 100;
            let y = j * 100;
            context.fillStyle = Utils.hsl(200, 70, 70);
            Utils.fillCircle(x, y, 50);
        }
    }
}

function drawCircles2() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = i * 100;
            let y = j * 100;
            context.fillStyle = Utils.hsla(200, 70, 70, 50);
            Utils.fillCircle(x, y, Math.random() * 100);
        }
    }
}

function drawCircles3() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = i * 100;
            let y = j * 100;
            context.fillStyle = Utils.hsla(200, 70, 70, 50);
            Utils.fillCircle(x, y, 10 + y / 10);
        }
    }
}

function drawCircles4() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = i * 100;
            let y = j * 100;
            context.fillStyle = Utils.hsl(i % 2 * 200, 70, 70);
            Utils.fillCircle(x, y, 50);
        }
    }
}

function drawCircles5() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = i * 100;
            let y = j * 100;
            context.fillStyle = Utils.hsl(j % 2 * 200, 70, 70);
            Utils.fillCircle(x, y, 50);
        }
    }
}

function drawCircles6() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = i * 100;
            let y = j * 100;
            context.fillStyle = Utils.hsl((i + j) % 2 * 200, 70, 70);
            Utils.fillCircle(x, y, 50);
        }
    }
}
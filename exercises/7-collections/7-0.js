"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x = [];
let y = [];

let mouseY = 0;
let mouseX = 0;

let total = 100;

document.onmousemove = onMouseMove;

setup();
update();

function setup(){
    context.strokeStyle = "dodgerblue";
    context.lineCap = "round";
    context.lineWidth = 20;
    for(let i = 0; i < total; i++){
        x[i] = Utils.randomNumber(10,width - 10);
        y[i] = Utils.randomNumber(10, height - 10);
    }
}

function update() {
    context.fillStyle = "midnightblue";
    context.fillRect(0,0,width,height);
    context.fillStyle = "dodgerblue";
    for(let i = 0; i < total; i++){
        let distance = Utils.calculateDistance(x[i],y[i],mouseX,mouseY);
        console.log(distance);
        Utils.fillCircle(x[i],y[i],10);
        if(distance < 250){
            Utils.drawLine(x[i],y[i],mouseX,mouseY);
        }
       
    }
    requestAnimationFrame(update);
}

/**
 * 
 * @param {MouseEvent} e 
 */
function onMouseMove(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    console.log(mouseX + " " + mouseY);
}

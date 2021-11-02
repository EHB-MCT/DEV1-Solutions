"use strict";
/** @type {CanvasRenderingContext2D} */
let context;

setupCanvasContext();

export default context;

function setupCanvasContext() {
    //get a reference to the canvas element and configure it to fill the whole window
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
}

window.onresize = reload;

function reload() {
    location.reload();
}
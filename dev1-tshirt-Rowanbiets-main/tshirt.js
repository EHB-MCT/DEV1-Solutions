"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;

let height = context.canvas.height;

let x = width / 2;
let y = height / 2;

let r = Utils.randomNumber(0, 255);
let g = Utils.randomNumber(0, 255);
let b = Utils.randomNumber(0, 255);

let kleur = Utils.rgba(r, g, b, 50);
drawPlanet();

function drawPlanet() {

    /**
     * Dit is voor de grote bladeren het krijgt een random kleur
     */
    context.fillStyle = kleur;
    Utils.fillCircle(x, y, 100);
}
/**dit is voor de sterren van kleur te laten veranderen */
drawStars();

function drawStars() {
    for (let i = 0; i < 1000; i++) {

        let n = Math.random() * width;
        let m = Math.random() * height;

        let distance = Utils.calculateDistance(x, y, n, m);

        let nkleur = Utils.rgb(b, g, r);

        if (distance < 140) {
            context.fillStyle = nkleur;
        } else {
            context.fillStyle = "transparent";
        }

        Utils.fillCircle(n, m, 2);
    }
}
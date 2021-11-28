"use strict";
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Downloaded from p5.js github: https://github.com/processing/p5.js/blob/master/src/math/noise.js //
// Referenced from http://mrl.nyu.edu/~perlin/noise/                                               //
// Adapted by Peter Dickx for the DEV1 course @ Erasmushogeschool Brussel                          //
// Which was adapted from PApplet.java                                                                       //
// which was adapted from toxi                                                                     //
// which was adapted from the german demo group farbrausch                                         //
// as used in their demo "art": http://www.farb-rausch.de/fr010src.zip                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////

let seed;

// Set to values from http://en.wikipedia.org/wiki/Numerical_Recipes
// m is basically chosen to be large (as it is the max period)
// and for its relationships to a and c
const m = 4294967296;
// a - 1 should be divisible by m's prime factors
const a = 1664525;
// c and m should be co-prime
const c = 1013904223;

const PERLIN_YWRAPB = 4;
const PERLIN_YWRAP = 1 << PERLIN_YWRAPB;
const PERLIN_ZWRAPB = 8;
const PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB;
const PERLIN_SIZE = 4095;

let perlin_octaves = 4; // default to medium smooth
let perlin_amp_falloff = 0.5; // 50% reduction/octave

const scaled_cosine = i => 0.5 * (1.0 - Math.cos(i * Math.PI));

let perlin; // will be initialized lazily by perlinNoise

/**
 * @method perlinNoise
 * @param  {Number} x   x-coordinate in noise space
 * @param  {Number} [y] y-coordinate in noise space
 * @param  {Number} [z] z-coordinate in noise space
 * @return {Number}     Perlin noise value (between 0 and 1) at specified
 *                      coordinates
 */

export function perlinNoise(x, y = 0, z = 0) {
  if (seed == null) {
    setSeed();
  }
  if (perlin == null) {
    loadPerlin();
  }

  if (x < 0) {
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }
  if (z < 0) {
    z = -z;
  }

  let xi = Math.floor(x);
  let yi = Math.floor(y);
  let zi = Math.floor(z);
  let xf = x - xi;
  let yf = y - yi;
  let zf = z - zi;
  let rxf, ryf;

  let r = 0;
  let ampl = 0.5;

  let n1, n2, n3;

  for (let o = 0; o < perlin_octaves; o++) {
    let of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB);

    rxf = scaled_cosine(xf);
    ryf = scaled_cosine(yf);

    n1 = perlin[ of & PERLIN_SIZE];
    n1 += rxf * (perlin[( of +1) & PERLIN_SIZE] - n1);
    n2 = perlin[( of +PERLIN_YWRAP) & PERLIN_SIZE];
    n2 += rxf * (perlin[( of +PERLIN_YWRAP + 1) & PERLIN_SIZE] - n2);
    n1 += ryf * (n2 - n1);

    of += PERLIN_ZWRAP;
    n2 = perlin[ of & PERLIN_SIZE];
    n2 += rxf * (perlin[( of +1) & PERLIN_SIZE] - n2);
    n3 = perlin[( of +PERLIN_YWRAP) & PERLIN_SIZE];
    n3 += rxf * (perlin[( of +PERLIN_YWRAP + 1) & PERLIN_SIZE] - n3);
    n2 += ryf * (n3 - n2);

    n1 += scaled_cosine(zf) * (n2 - n1);

    r += n1 * ampl;
    ampl *= perlin_amp_falloff;
    xi <<= 1;
    xf *= 2;
    yi <<= 1;
    yf *= 2;
    zi <<= 1;
    zf *= 2;

    if (xf >= 1.0) {
      xi++;
      xf--;
    }
    if (yf >= 1.0) {
      yi++;
      yf--;
    }
    if (zf >= 1.0) {
      zi++;
      zf--;
    }
  }
  return r;
}

export function setSeed(val) {
  // define the recurrence relationship
  // pick a random seed if val is undefined or null
  // the >>> 0 casts the seed to an unsigned 32-bit integer
  seed = (val == null ? Math.random() * m : val) >>> 0;
  perlin = null;
}

function loadPerlin() {
  let z = seed;
  perlin = new Array(PERLIN_SIZE + 1);
  for (let i = 0; i < PERLIN_SIZE + 1; i++) {
    z = (a * z + c) % m;
    perlin[i] = z / m;
  }
}

export function getSeed() {
  return seed;
}
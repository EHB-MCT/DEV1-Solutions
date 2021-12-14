"use strict";

setup();

function setup()
{
    let numbers = [];

    for (let i = 0; i < 100; i++)
    {
        numbers[i] = Math.random() * 100;
    }

    let numbers2 = [];


    for (let i = 0; i < 200; i++)
    {
        numbers2[i] = Math.random() * 100;
    }

    console.log(calculateAverage(numbers));
    console.log(calculateAverage(numbers2));
}

/**
 * this function calculates an average of numbers
 * @param {[]} numbers  a list of numbers
 */
function calculateAverage(numbers)
{
    let total = 0;
    for (let i = 0; i < numbers.length; i++)
    {
        total += numbers[i];
    }
    return total / numbers.length;
}
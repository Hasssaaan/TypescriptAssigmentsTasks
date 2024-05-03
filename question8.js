"use strict";
//Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
let temperature = [10, 20, 30, 40, 50];
let high = 0;
for (let i = 0; i < temperature.length; i++) {
    if (high < temperature[i]) {
        high = temperature[i];
    }
}
console.log(`Highest temperature is ${high}`);

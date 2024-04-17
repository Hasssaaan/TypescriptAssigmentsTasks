"use strict";
let x = 10;
let y = 20;
let z = 15;
let largest;
if (x > y && x > z) {
    largest = x;
}
else if (y > x && y > z) {
    largest = y;
}
else {
    largest = z;
}
console.log(`The largest number is ${largest}.`);

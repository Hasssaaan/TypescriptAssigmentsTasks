"use strict";
//Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
let array1 = [1, 2, 3, 4, 5, 6];
function findProduct(array) {
    let Product = 1;
    for (let i = 0; i < array.length; i++) {
        Product *= array[i];
    }
    console.log(`Product of array is ${Product}`);
}
findProduct(array1);

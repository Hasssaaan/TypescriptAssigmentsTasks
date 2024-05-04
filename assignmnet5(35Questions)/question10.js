"use strict";
//Write a function that takes an array of numbers and returns the count of positive numbers in the array.
function countNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}
let numbers = [1, 4, 5, 6, 7, 9, -2, 3, -5, 6, -7];
console.log(`Positive numbers are ${countNumbers(numbers)}`);

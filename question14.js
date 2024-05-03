"use strict";
//Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
let arrayOfnumberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reverseArray(array) {
    let reverseArray = [];
    for (let i = array.length; i >= 0; i--) {
        reverseArray.push(i);
    }
    return reverseArray;
}
console.log(reverseArray(arrayOfnumberss));

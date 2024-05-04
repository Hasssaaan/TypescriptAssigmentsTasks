"use strict";
//Write a function to find and return the smallest number in an array of integers
let array = [1, 2, 3, 4, 5, 6];
function findSmallest(array) {
    let small = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < small) {
            small = array[i];
        }
    }
    console.log(`Smallest element in array is ${small}`);
}
findSmallest(array);

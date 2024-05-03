"use strict";
console.log("Hello world");
let temp = 18;
if (temp < 20) {
    console.log("Its too cold!");
}
let apples = 10;
console.log(`After removing 3 apples we are left with  ${apples - 3} apples`);
let firstName = "Hassaan";
let lastName = "Jahangir";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
if (5 > 3) {
    console.log("yes");
}
else {
    console.log("No");
}
function calculateArea(radius) {
    let result = (2 * 3.14 * radius) * 2;
    return result;
}
console.log(`Area of circle is ${calculateArea(10)}`);
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log(`fizz`);
    }
    else if (i % 5 == 0) {
        console.log(`buzz`);
    }
    else {
        console.log(i);
    }
}
let temperature = [10, 20, 30, 40, 50];
let high = 0;
for (let i = 0; i < temperature.length; i++) {
    if (high < temperature[i]) {
        high = temperature[i];
    }
}
console.log(`Highest temperature is ${high}`);
let age = 19;
if (age >= 18) {
    console.log("Person is adult");
}
else {
    console.log("Person is Minor");
}
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
let fruits = ["apple", "bannana", "orange"];
console.log(fruits.splice(1, fruits.length));
let arrayOfnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function square(arr) {
    let newarray = [];
    for (let i = 0; i < arr.length; i++) {
        newarray.push(arr[i] * arr[i]);
    }
    return newarray;
}
let squaredArray = square(arrayOfnumbers);
for (let i = 0; i < squaredArray.length; i++) {
    console.log(squaredArray[i]);
}
function reverseArray(arr) {
    for (let i = 0; i < arr.length;)
        ;
}

"use strict";
let year = 2020;
let isLeapYear = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
console.log(`${year} is ${isLeapYear ? '' : 'not '}a leap year.`);

let year: number = 2020;

let isLeapYear: boolean = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);

console.log(`${year} is ${isLeapYear ? '' : 'not '}a leap year.`);

"use strict";
// Declaration of boolean variables
let a = true, b = false, c = true;
// Expressions
let result1 = a && c; // true
let result2 = a && b; // false
let result3 = a || b; // true
let result4 = b || c; // true
let result5 = !b; // true
let result6 = !a; // false
let result7 = a && (b || c); // true
let result8 = (a && b) || c; // true
let result9 = !a || !b; // true
let result10 = !(a && c); // false
let result14 = !a == b; // true
// Output the results to the console
console.log(`result1 (a && c): ${result1}`);
console.log(`result2 (a && b): ${result2}`);
console.log(`result3 (a || b): ${result3}`);
console.log(`result4 (b || c): ${result4}`);
console.log(`result5 (!b): ${result5}`);
console.log(`result6 (!a): ${result6}`);
console.log(`result7 (a && (b || c)): ${result7}`);
console.log(`result8 ((a && b) || c): ${result8}`);
console.log(`result9 (!a || !b): ${result9}`);
console.log(`result10 (!(a && c)): ${result10}`);
console.log(`result14 (!a == b): ${result14}`);

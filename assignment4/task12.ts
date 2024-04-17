let x: number = 10;
let y: number = 20;
let z: number = 15;

let largest: number;

if (x > y && x > z) {
  largest = x;
} else if (y > x && y > z) {
  largest = y;
} else {
  largest = z;
}

console.log(`The largest number is ${largest}.`);

let score: number; // The score is not yet defined

// Let's assume score gets a value from somewhere in your program
score = 85; // This is just an example assignment

let grade: string;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

console.log(`Your grade is ${grade}.`);

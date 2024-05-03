//Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(arrr:any[]) {
    const seen = new Set();
    const duplicates = new Set();

    for (let i = 0; i < arrr.length; i++) {
        if (seen.has(arrr[i])) {
            duplicates.add(arrr[i]);
        } else {
            seen.add(arrr[i]);
        }
    }

    console.log([...duplicates]);
}

// Example usage:
findDuplicates([1, 2, 2, 3, 4, 4, 5]); // Logs: [2, 4]

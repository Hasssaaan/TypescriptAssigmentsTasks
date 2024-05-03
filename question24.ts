//Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(array: number[]) {
    array.forEach(function(value, index, arr) {
        arr[index] = value + 1;
    });
    console.log(array);
}

incrementAll([1, 2, 2, 3, 4, 4, 5]);  

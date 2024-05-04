//Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(radius:number){

    let result=(2*3.14*radius)*2
    return result;
}
console.log(`Area of circle is ${calculateArea(10)}`);
"use strict";
//Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
let falsyValues = [1, false, 2, null, 3, 0, "", undefined, NaN];
function removeFalseValues(falsyValues) {
    let newArray = [];
    for (let i = 0; i < falsyValues.length; i++) {
        if (falsyValues[i] == false || falsyValues[i] == 0 || falsyValues[i] == null || falsyValues[i] == undefined || falsyValues[i] == "" || Number.isNaN(falsyValues[i])) { }
        else {
            newArray.push(falsyValues[i]);
        }
    }
    return newArray;
}
console.log(removeFalseValues(falsyValues));

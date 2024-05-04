//Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
let arrayOfnumber:number[]=[1,2,3,4,5,6,778,8];
function sumOfElements(array:number[]){
    let sum=0;
    for(let i=0;i<arrayOfnumber.length;i++)
        sum+=arrayOfnumber[i];
    return sum;
}
console.log(sumOfElements(arrayOfnumber));
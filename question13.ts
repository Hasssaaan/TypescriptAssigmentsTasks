//Develop a function that takes an array of numbers and returns a new array with each number squared.
let arrayOfnumbers=[1,2,3,4,5,6,7,8,9,10];
function square(arr:number[]){
     let newarray=[];
     for(let i=0;i<arr.length;i++){

        newarray.push(arr[i]*arr[i]);
     }
     return newarray;
}
let squaredArray=square(arrayOfnumbers);
for(let i=0;i<squaredArray.length;i++){
    console.log(squaredArray[i]);
}

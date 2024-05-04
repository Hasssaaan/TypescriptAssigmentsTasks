//Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
let arrayToFindIndex:number[]=[1,2,3,4,4,5,56,6,7];
function findIndex(number:number){
    for(let i=0;i<arrayToFindIndex.length;i++){
        if(number===arrayToFindIndex[i])
            return i
        }
        return -1;

    }
console.log(console.log(`number found at index ${findIndex(62)}`));
//Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
let arrayOfFruits=["apple","banana","orange"];
function selectiveelement(array:string[],number:number){
    let selectedArray:string[]=[];
for(let i=0;i<array.length;i++){
    if(array[i].length>number){
selectedArray.push(array[i]);
    }

}
return selectedArray;
}
console.log(selectiveelement(arrayOfFruits,2));
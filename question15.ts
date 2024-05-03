//Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
let arrayOfScores:number[]=[10, 5, 20, 20, 4, 5, 2, 25, 1];
function findScores(arrayOfScores:number[]){
    let max=arrayOfScores[0];
    let min=arrayOfScores[0];
    let countMax=0;
    let countMin=0;
    if(arrayOfScores.length==0){
        console.log("No scores found");
        return
    }
    for(let i=0;i<arrayOfScores.length;i++){
        if(max<arrayOfScores[i]){
            max=arrayOfScores[i];
            countMax++;
        }
        if(min>arrayOfScores[i]){
            min=arrayOfScores[i];
            countMin++;
        }
    }
    console.log(`Minimum score is ${min}`)
    console.log(`Maximum Score is ${max}`)
    console.log(`No of times score fall below the minimum score is ${countMin}`)
    console.log(`No of times score score exceed the maximum score is ${countMax}`)

}
findScores(arrayOfScores);
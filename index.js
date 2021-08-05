const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = batteryBatches.reduce(function(count, element){
    return count + element;
}, 0)

console.log(totalBatteries);

//const doubledAndSummedFromTen = [1, 2, 3].reduce(function(accumulator, element){ 
    //return element * 2 + accumulator}, 10)
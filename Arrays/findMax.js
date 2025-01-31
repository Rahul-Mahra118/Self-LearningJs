//  Three methods to find the max element in an array->

// 1-> using reduce method

let arr=[4,15,6,3,6,7]

const result= arr.reduce((acc,currentValue)=>{
   return currentValue>acc? currentValue: acc;
}, arr[0])

console.log(result);

//2-> Math.max()  -> if we don not pass anything then  it will return -infinity

const result2= Math.max(...arr);   //we spread operator in math.max() so it will spread the each element as an individual
console.log(result2)

//third-> By looping over the array and comparing it with each other elements

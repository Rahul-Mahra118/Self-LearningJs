// In this question we have to rearrange the array elements  
// numbers of postive elements != number of negative elements
// I have to just arrange the postive and negative in alternative order

let arr= [1,2,3,-1,-2,-3,-6,4,5]

let negativeNum= arr.reduce((acc,num)=> num<0?acc=acc+1:acc,0)
// console.log(negativeNum)
postiveNum= arr.length-negativeNum
console.log(postiveNum)

let positiveArr=[];
let negativeArr=[];


// In this we will find the second largest element in an array without sorting.

let arr=[2,5,1,3,2,7];

let largest=-Infinity
let largest2=-Infinity

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest2=largest;
        largest= arr[i]
    }
    else{
        largest2=arr[i]
    }
}
// In this we will have one array and K, 
// we have to find the longest subarray whose sum is equal to k(sum)
// ****this approach will work with positive numbers only.


let arr=[10, 5, 2, 7, 1, 10];
let K=15;

let i=0; //start point of window
let j=0; //stop point of window

let maxLength=0;
let sum=0;
while(j<arr.length){
 sum+=arr[j];
 while(sum>K){
    sum-=arr[i];
    i++;
}
 if(sum<K){
    j++;
 }
 else if( sum==K){
    //as soon as i will hit the condition so i will store that window size;
    windowSize=j-i+1;
    maxLength= Math.max(maxLength, windowSize )
    j++;
 }
 
  
}
console.log(maxLength)
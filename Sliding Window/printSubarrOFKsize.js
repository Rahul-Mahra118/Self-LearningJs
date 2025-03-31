// i will print all subarray of length K
let arr=[2,4,5,6,7,7,8,9];

let i=0; //starting point of window
let j=0; // ending point of window
let k=2; //length of window (each subarray length)
let storeSubarray=[]
while(j<arr.length){
    if(j-i+1==k){
        storeSubarray.push(arr.slice(i,j+1))
        i++;
    }
   
    j++;
}
console.log(storeSubarray)
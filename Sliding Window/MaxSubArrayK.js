// Given an array of integers arr[]  and a number k. Return the maximum sum of a subarray of size k.
// K is the window size


function getSubarray(arr, N,K){
    let i=0;//start window
    let j=0;//stop window
  let sum=0; //it will store sum of each subarray
  let storeSum=[]; //store sum of all subarray.
    while(j<N){
        
        sum+=arr[j]
        if(j-i+1===K){
            
           storeSum.push({i,j, sum})
    
           //before shifting j subtract starting element.
           sum-= arr[i]

           i++;
          
        }
        j++;
        
    }
   return storeSum
}
let store=getSubarray([1,2,3,4,5,6,7,8],8,4);

console.log(store)
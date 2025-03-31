// // in this we have given the array having equal number of positive and negative numbers

let arr=[1,2,3,-2,-5,-8];
// // brute force approach 
// // take two array of size n/2 
// let postiveArray=[];
// let negativeArray=[];

// //travel through whole array

// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0)negativeArray.push(arr[i]);
//     else postiveArray.push(arr[i])
// }

// console.log(postiveArray)
// console.log(negativeArray)

// for(let i=0;i<arr.length/2;i++){
//     //even places-> postive value
//   arr[2*i]= postiveArray[i]
//     //odd places-> negative value
//     arr[2*i+1]= negativeArray[i]
// }
// console.log(arr)

// //--------------------------
//optimised approach
//--------------------------
//iterate through the array
let ans=[]
let postiveIdx=0; //even place
    let negativeIdx=1; //odd place
for(let i=0;i<arr.length;i++){
    
    if(arr[i]<0){
        ans[negativeIdx]=arr[i]
        // console.log("negative",ans)
        negativeIdx+=2;
    }
    else {
        ans[postiveIdx]=arr[i];
        // console.log(ans)
        postiveIdx+=2;
    }


}
console.log(ans)
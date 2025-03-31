// print all the subarrays of given array.

let arr=[100, 200, 300, 400];
let fullArray=[]
for(let i=0;i<arr.length;i++){
    let arr2=[]
    for(let j=i;j<arr.length;j++){
        arr2.push(arr[j])
        // console.log(arr2)
        fullArray.push([...arr2])
    }
}

console.log(fullArray)
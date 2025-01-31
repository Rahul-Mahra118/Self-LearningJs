// In this we will remove the element from different position
let arr=[1,2,3,4,5,6]

let pos=3;
console.log(arr.length)
for(let i=pos-1;i<arr.length;i++){
    arr[i]=arr[i+1];
}

arr.length=arr.length-1;
console.log(arr);
console.log(arr.length)

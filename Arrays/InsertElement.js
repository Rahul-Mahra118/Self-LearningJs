// In this we will add the element at different position of array element

// Adding at specific position
let num=90;
let arr= [1,2,3,4,5,6];
let pos=3;
console.log(arr)
function addElement(num,arr,pos){
 for(let i=arr.length-1;i>=pos-1;i--){
    arr[i+1]=arr[i]
 }
 arr[pos-1]=num;
 console.log(arr, arr.length)
 
}

addElement(num, arr, pos);

//adding at front
function addAtFront(num, arr){
    for(let i=arr.length-1;i>=0;i--){
        arr[i+2]=arr[i]
    }
    arr[0]=num;
    arr[1]="raj"
    console.log(arr[1])
    console.log(arr);
}
addAtFront(num,arr)
// i can add element at using unShift() method of array in js
arr.unshift(20)
console.log(arr)
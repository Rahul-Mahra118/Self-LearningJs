// In this we will find the union of two arrays
// brute force approach to take the set Data structure


// let arr=[1,1,2,3,4,5];
// let arr2= [2,3,4,4,5,6];

// let mySet= new Set();

// for(let i=0;i<arr.length;i++){
//     mySet.add(arr[i])
// }
// for(let i=0;i<arr2.length;i++){
//     mySet.add(arr2[i])
// }

// console.log(mySet)

// for(let x of mySet){
//     console.log(x)
// }

//lets take a optimal approach using two pointer

let arr=[1,1,2,3,4,5];
let arr2= [2,3,4,4,5,6];

let union=[];

let i=0;
let j=0;
while(i<arr.length && j<arr2.length){

    if(arr[i]<=arr2[j]){
        if(union.length==0 || union.at(-1)!=arr[i])
        { union.push(arr[i])}
        i++;
    }
    else{
        if(union.length==0 || union.at(-1)!==arr2[j]){
            union.push(arr2[j])
        }
        j++;
    }
}
//elements left
while(j<arr2.length){
    if(union.length==0 || union.at(-1)!==arr2[j]){
        union.push(arr2[j])
    }
    j++;
}

while(i<arr.length){
    if(union.length==0 || union.at(-1)!==arr2[i]){
        union.push(arr[i])
    }
    i++;
}

console.log(union)

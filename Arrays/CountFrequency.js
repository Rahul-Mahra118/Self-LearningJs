//In this we will find the most occuring element in an array

let arr=[1,2,1,3,2,2,3,5,6,7,8,8,8];

let maxCount=1;
let mostFrequent=arr[0];

for(let i=0; i<arr.length;i++){
    let count=1;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            count++;
        }
    }
    if(count>maxCount){
    mostFrequent=arr[i];
      maxCount=count;
    }
}
console.log(mostFrequent);

// lets try to use some inBuilt mehtods


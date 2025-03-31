const arr = [
    [1, 2, 3],
    [4, 15, 6],
    [7, 8, 9,90]
  ];

for(let i=0;i<Math.floor(3/2);i++){
   let temp= arr[i]
   arr[i]= arr[arr.length-1-i];
   arr[arr.length-1-i]=temp;
   
}
console.log(arr)

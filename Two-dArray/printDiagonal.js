const arr = [
    [1, 2, 3],
    [4, 15, 6],
    [7, 8, 9]
  ];

//printing the main diagonal
 let temp=""
for(let i=0;i<arr.length;i++){
   
    for(let j=0;j<arr[i].length;j++){
        if(i==j){
           temp+=arr[i][j]+" "
        }
    }
}
console.log(temp)

// printing the secondary diagonal

let second=""
for(let i=0;i<arr.length;i++){
   
    for(let j=0;j<arr[i].length;j++){
        if(i+j==arr.length-1){
            second+=arr[i][j]+" "
        }
    }
}
console.log(second)

for(let i=0;i<arr.length;i++){
    console.log(arr[i][arr.length-1-i])
}
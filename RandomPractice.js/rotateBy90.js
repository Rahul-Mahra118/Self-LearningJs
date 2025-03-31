let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

//transpose the matrix
//each row reverse

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        let temp= arr[i][j]
        arr[i][j]= arr[j][i];
        arr[j][i]=temp;
    }
}
// console.log(arr)

for(let i=0;i<arr.length;i++){
    let start=0;
    let end= arr.length-1;
    while(start<end){
        let temp= arr[i][start];
        arr[i][start]=arr[i][end];
        arr[i][end]=temp
        start++;
        end--;
    }
}
console.log(arr)
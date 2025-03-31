let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

let n= arr.length;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<Math.floor(n/2);j++){
        let temp= arr[i][j];
        arr[i][j]=arr[i][arr[i].length-1-j];
        arr[i][arr[i].length-1-j]=temp;
    }
    console.log()

}

console.log(arr)
const arr = [
    [1, 2, 3],
    [4, 15, 6],
    [7, 8, 9,90]
  ];

function findRowSum(arr){
    for(let i=0;i<arr.length;i++){
        let row=0;
        for(let j=0;j<arr[i].length;j++){
            row+=arr[i][j];

        }
        console.log(i,row);
    }
}

findRowSum(arr)
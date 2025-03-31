let arr=[
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
  ]
//rotate by 90 degree
//-------------
//brute Force Approach

let ans=[]

for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
        //initialise the jth 
        if (!ans[j]) ans[j] = []; 
        //these below 3 lines are reference from dry run example
        // i+x=3 -> 
        // i+x=n-1 (4-1)
        //x= n-1-i 
        ans[j][4-1-i]=arr[i][j]
    }
    // console.log()
}
// console.log(ans)

//lets use optimised approach
/**
step-1
    transpose the given matrix
step -2
     reverse each row 
output-> rotated matrix by 90 degree
 */
//transpose the matrix
let matrix=[
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
  ]
  console.log(matrix)
let n=4
for(let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
        //swap
        let temp= matrix[i][j]
        matrix[i][j]= matrix[j][i]
        matrix[j][i]=temp
    }
}
console.log('transposed matrix \n', matrix)
//step-2 reverse each row

for(let i=0;i<n;i++){
    let start=0;
    let end= n-1;
    while(start<end){
        let temp= matrix[i][start]
        matrix[i][start]= matrix[i][end]
        matrix[i][end]=temp;

        start++;
        end--;
    }
}
console.log("final row revered matrix \n", matrix)


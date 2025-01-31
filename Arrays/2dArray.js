//find the sum of odd elements in a 2D Array
let matrix = [
    [1, 2, 3],   // Row 1
    [4, 5, 6],   // Row 2
    [7, 8, 9]    // Row 3
]
let sum=0;
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        if(matrix[i][j]%2!=0){
            sum=sum+matrix[i][j]
        }
    }
}
console.log(sum)
// I have implemented 3 Codes here
/*
-> Printing the matrix
-> Printing column wise Matrix
-> priniting the border of matrix
-> printing the diagonal element of matrix



*/

let matrix = [
    [1, 2, 3],   // Row 1
    [4, 5, 6],   // Row 2
    [7, 8, 9]    // Row 3
]
// printing row wise matrix
for(let i=0;i<matrix.length;i++){
    let rows=""
    for(let j=0;j<matrix[i].length;j++){
        rows+=matrix[i][j]+" "
    }
    console.log(rows)
}
console.log("----------------------------------------------------")
// printing column wise
for(let i=0;i<matrix.length;i++){
    let rows=""
    for(let j=0;j<matrix[i].length;j++){
       rows+=matrix[j][i]+" "
    }
    console.log(rows)
}
console.log("----------------------------------------------------")
//printing the boundary ->>>
for(let i=0;i<matrix.length;i++){
    let rows=""
    for(let j=0;j<matrix[i].length;j++){
        if(i==0||i==matrix.length-1||j==0||j==matrix.length-1){
            rows+=matrix[i][j]+" "
        }
        else{
            rows+="*"+" "
        }
    }
    console.log(rows)
}
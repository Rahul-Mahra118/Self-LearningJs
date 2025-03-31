let arr=[
    [ 13, 9, 5, 1 ],
    [ 14, 10, 6, 2 ],
    [ 15, 11, 7, 3 ],
    [ 16, 12, 8, 4 ]
  ]

  //column reversal

for(let j=0;j<4;j++){
    let start=0;
    let end= 4-1;
    //reversing
    while(start<end){
        //r
        let temp= arr[start][j]
        arr[start][j]= arr[end][j]
        arr[end][j]= temp;
        start++; 
        end--;
        }
}
console.log(arr)
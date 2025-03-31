let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
 ]

let col=-1;
let row=-1;

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
       if(arr[i][j]==target){
        col=j;
        row=i;
        break;
       }
    }
}



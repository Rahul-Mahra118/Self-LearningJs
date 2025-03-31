//in this code we will try to rotate the array by K degree
/**
 k is rotation time
 k=1 -> 90 degree rotation
 k=2 -> 180 degree rotation
 k=3 -> 270 degree 
 k=4 -> no rotation 

 so k= k%4; -> we wrap roation .
 */

 let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
 ]

let k=3;

for(let i=1;i<=3;i++){
    rotateBy90(arr)
    console.log(arr)
}
// console.log(arr)
//function to calculate the 90 deg.
function rotateBy90(arr){
    //transpose the matrix
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            //swap
            let temp= arr[i][j]
            arr[i][j]=arr[j][i]
            arr[j][i]=temp;
        }
    }
    // console.log(arr);
    //row reverse
    for(let i =0;i<arr.length;i++){
        let start=0;
        let end=arr.length-1;
        while(start<end){
            let temp= arr[i][start]
            arr[i][start]= arr[i][end]
            arr[i][end]= temp;
            start++;
             end--;
        }
        console.log(arr)
    }

    // console.log(arr)
}
// rotateBy90(arr)
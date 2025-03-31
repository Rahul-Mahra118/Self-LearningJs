let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

let left=0;
let right = arr[0].length-1;
let top=0;
let bottom=arr.length-1;
let column = arr[0].length;
let rows= arr.length;
let count=0;
let total= rows*column;

while(count<total){
//left to riht

    for(let i=left;i<=right&& count<total;i++){
        console.log(arr[top][i])
        count++
    }
    top++;
    for(let i =top;i<=bottom&& count<total ;i++){
      console.log(arr[i][right])
      count++;
    }
    right--;

    for(let i=right;i>=left&& count<total;i--){
        console.log(arr[bottom][i])
        count++;
    }
    bottom--;
   for(let i=bottom ;i>=top&& count<total;i--){
    console.log(arr[i][left])
    count++;
   }
   left++;
}
   

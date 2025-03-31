let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

//In this i have to rotate the array by 180 degree
// approach -1
// if  i try to rotate 2 times of 90 deg.
//approach -2 
// step=1 -> column reverse
// step-2 -> row reverse

//column reverse->>>
for(let i=0;i<arr.length;i++){
    let start=0;
    let end= arr.length-1;
    while(start<end){
      let temp= arr[start][i];
      arr[start][i]=arr[end][i];
      arr[end][i]= temp;
      start++;
      end--;
    }
}
console.log("After Column reverse \n", arr);

//row reverse
for(let i=0;i<arr.length;i++){
    let start=0;
    let end= arr.length-1;
    while(start<end){
        let temp= arr[i][start]
        arr[i][start]= arr[i][end]
        arr[i][end]=temp;
        start++;
        end--;
    }
}
console.log("final 180 degree \n",arr)
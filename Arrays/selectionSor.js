let arr=[10,2,4,5,12,7,8];

for(let i=0;i<arr.length-1;i++){
    let minIndex=i;
    let j;
    for( j=i+1;j<arr.length;j++){
        if(arr[j]<arr[minIndex])
            minIndex=j
    }
    swap(arr, i, minIndex)

}
console.log(arr);
function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
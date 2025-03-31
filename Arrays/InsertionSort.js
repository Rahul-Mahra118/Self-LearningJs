let arr=[10,1,7,4,8,2,11]

for(let i=1;i<arr.length;i++){
    let temp=arr[i]
    for (let j=i-1;j>=0;j--){
        if(arr[j]>temp)
            arr[j+1]=arr[j]
        else
          break;
        arr[j]=temp;
    }

}

console.log(arr)
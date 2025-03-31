let arr=[]

//lets push elements in an array
let num=1;
for(let i=0;i<4;i++){
    arr[i]=[]
    for(let j=0;j<4;j++){
        arr[i].push(num++)
    }
    console.log(arr[i])
}
console.log(arr)

let arr=[1,2,1,3,2,2,13,5,6,7,8,8,8]

let sortArray= arr.sort((a,b)=>a-b)
console.log(sortArray)
let newArr=[]
for(let i=0;i<sortArray.length;i++){
    if(sortArray[i]!=sortArray[i+1]){
      newArr.push(arr[i])
    }
}
console.log(newArr)

for(let i=0;i<sortArray.length;i++){
    if(sortArray[i]!==sortArray[i+1]){
        sortArray[i-1]=sortArray[i]
    }
}
console.log(sortArray)
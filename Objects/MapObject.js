let arr=["a","b","c","d"]
let object ={}

for (let i=0;i<arr.length;i++){
    let value= arr[i]
    let key= i+1;
    object[key]= value
}
console.log(object)




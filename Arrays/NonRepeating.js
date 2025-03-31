// In this we wil find the non Repeating element

let arr=[1,2,1,3,2,2,13,5,6,7,8,8,8]

let obj={}

for(let key in arr){
    obj[arr[key]]= (obj[arr[key]]||0)+1;
}
console.log(obj)

let min = Math.min(...Object.values(obj))

console.log(min)
for(key in obj){
    if(obj[key]==min){
        console.log(key)
    }
}
for(let i=0;i<arr.length;i++){

}
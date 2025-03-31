let str="Rahul is a good coder"

let arr= str.split(" ")
console.log(arr)

for(let i=0;i<arr.length;i++){
  arr[i]=  arr[i].split("").reverse().join("")
}
console.log(arr)
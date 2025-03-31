let arr=[3,4,1,6,8,9,4];
let k =3;
let sortedArray= arr.sort((a,b)=>b-a);
let bag=""
for(let i=0;i<k;i++){
   bag+= sortedArray.pop()
}

console.log(bag)
let kthsmallest= bag.split("");
console.log(kthsmallest)
console.log(kthsmallest[kthsmallest.length-1])
// In this code we will find all the possible substirngs
let str="Rahul_Mahra";
let res=[]
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
      
         res.push(str.slice(i,j))
    }
}
console.log(res)
let str="aeiou"
let str1= "Rahul Mahra";
let indices=[]
for(let i=0;i<str1.length;i++){
    if(str.includes(str1[i])){
       indices.push([i, str1[i]])
    }
  
}
console.log(indices)
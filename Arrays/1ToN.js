let str='abcdefghijklmnopqrstuvwxyz'
let obj={}
let i=1;
for(let char of str){
  obj[char]=(obj[char]||0 )+i++;
}
console.log(obj)
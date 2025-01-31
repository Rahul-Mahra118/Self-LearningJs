// In this we will try to encode the given string.

let str="Rahul";
let currentPosition=0,newPosition=0, EncodedString="";
for(let i=0;i<str.length;i++){
    currentPosition=str.charCodeAt(i);
    newPosition=currentPosition+2;
    EncodedString=EncodedString+String.fromCharCode(newPosition)
}
console.log(str);
console.log(EncodedString)
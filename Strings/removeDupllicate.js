// Remove Duplicates from a String
// Problem: Remove all duplicate characters in the string.
// Input: "programming"
// Output: "progamin"
//brute force

let str = "programming";
let resultString = "";
console.log(resultString.length);

for (let i = 0; i < str.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < resultString.length; j++) {
    if (str[i] === resultString[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    resultString += str[i];
  }
}
console.log(resultString);

//optimize we can use object and set for this.

let obj={}
let emp=''
for(let char of str){
   if(!obj[char]){
    emp+=char
    obj[char]= true;
   }
}
console.log(emp)
console.log(obj)
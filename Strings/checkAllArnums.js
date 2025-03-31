// . Check if a String Contains Only Digits
// Problem: Check if a string contains only numeric characters.
// Input: "12345"
// Output: true
// Input: "12a45"
// Output: false

let str="12345"
let flag =true;

for(let i=0;i<str.length;i++){
    if(str[i]>='a' && str[i]<='z'){
        flag=false;
        break;
    }
}
if(flag)console.log(true)
else console.log(false)
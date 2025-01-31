// In this code we will find the repition of character in a particular string

/**
 * Pseudocode->>
 */

let str="aaabbc";
let bag=""
let count=1;
for(let i=0;i<str.length;i++){
    if(str[i]===str[i+1]){
        count++;
    }
    else{
        bag+=str[i]+count;
        count=1;
    }
    
}
console.log(bag)
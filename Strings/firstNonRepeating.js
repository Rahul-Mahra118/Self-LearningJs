// Find the First Non-Repeating Character
// Problem: Find the first character in a string that does not repeat.
// Input: "swiss"
// Output: "w"


let str='swwiikss'

for(let i=0;i<str.length;i++){
    let isDuplicate=false;
    for(let j=0;j<str.length;j++){
        if(i!=j && str[i]===str[j]){
            isDuplicate=true;
            break;
        }
    }
    if(!isDuplicate){
        console.log(str[i])
        break;
    }

}

let obj={}

for(let char of str){
    obj[char]=(obj[char]||0 )+1;
}
console.log(obj)

for(let key in obj){
    if(obj[key]==1) console.log(key)
}
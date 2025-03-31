// Find the Longest Word in a Sentence
// Problem: Find the longest word in a sentence.
// Input: "I love programming challenges"
// Output: "programming"

let str="I love programming challenges";
// console.log(str.length)
let str1= str.split(" ")
// console.log(str1[3].length)
let maxi=-Infinity;
let index=-1;
for(let i=0; i<str1.length;i++ ){
    if(str1[i].length>maxi){
        maxi= str1[i].length
        index=i
    }

}

console.log(str1[index])

// without array

let maxWord=''
let currentWord=''

for(let i=0;i<str.length;i++){
    if(str[i]==' '){
        if(currentWord.length>maxWord.length){
            maxWord=currentWord
        }
        currentWord=''
    }
    else{
        currentWord+=str[i]
    }
    
}
console.log(maxWord)

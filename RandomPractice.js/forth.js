// let str = "labbccdd";
// let n = str.length;

// function calculateFrequency(n, str) {

//   let frequencyObject = {};
//   for (let i = 0; i < n; i++) {
//     frequencyObject[str[i]]=frequencyObject[str[i]]+1|| 1;
//   }
//  let minFrequency=str[0];
//  let minCount= n

//   for(let char in frequencyObject){
//     let currentCharCount=frequencyObject[char]
    
//     if(currentCharCount<minCount || (currentCharCount==minCount && char <minFrequency)){
//         minFrequency=char;
//         minCount=currentCharCount;
//     }
//   }

// console.log(minFrequency ,minCount)

// }

// calculateFrequency(n,str)
let n=4

let row=""
for(let i=1;i<=n-1;i++){
  row+="*"+" "
}
console.log(row+"*")
// lets print the middle part
for(let i=1;i<=n-2;i++){
  let temp=""
  temp+="*"
  for(let j=1;j<=4;j++){
    temp+=" "
  }
  console.log(temp+="*")
  
}
  console.log(row+"*")

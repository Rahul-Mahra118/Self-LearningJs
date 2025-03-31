let count =1;
let n=4;
for(let i=1;i<=n;i++){
    let row=""
    
    for(let j=1;j<n;j++){
         row+=count+" ";
         count++;
    }
    let res= row+count++;
    console.log(res)
}
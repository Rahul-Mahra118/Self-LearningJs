let traingle=[]
for(let i=0;i<5;i++){
 let row=[]
    for(let j=0;j<=i;j++){
     if(j==0||j==i){
        row.push(1);
     }
     else{
        let value=traingle[i-1][j-1]+traingle[i-1][j];
        row.push(value);
     }
    }
    traingle.push(row)
}
console.log(traingle);
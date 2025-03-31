
for (let i=1;i<5;i++){
    let row=""
    for(let k=1;k<5-i;k++){
        row+="&"
    }

    for(let j=1;j<=5-1;j++){
        if(i+j==5-j){
            row+="*"
        }
    }
    console.log(row)
}

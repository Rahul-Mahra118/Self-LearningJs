for(let i=0;i<=5;i++){
    let row=''
    for(let j=1;j<=5-i;j++){
     row+=' '
    }
    for(let k=1;k<=i;k++){
        row+='*'
    }
    
    console.log(row)
}
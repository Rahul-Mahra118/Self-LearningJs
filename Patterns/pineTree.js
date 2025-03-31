function printPineTree(n){
    let length1=0;
    for(let i=1;i<=n;i++){
        let temp=''

        //spaces //n=5
        for(let j=1;j<=n-i;j++){
            temp+=" " //4 space
        }
        //stars
        for(let k=1;k<=(2*i)-1;k++){
            temp+="*"
        }
        console.log(temp)
        
    }
  
    for(let i=1;i<=Math.max(2,n/2);i++){
        let temp=''
        //space
        for(let j=1;j<=n-1;j++){
            temp+=" "
        }
        //star
        for(let k=1;k<=1;k++){
            temp+="|"
        }
        console.log(temp)

    }
}

printPineTree(5)
function hollowSquare(n){
    let temp=""
    for(let i=1; i<n;i++){
        temp=temp+"* "
    }
    temp+="*"
    console.log(temp)
    //lets print the hollow part
    for(let i=1;i<=n-2;i++){
        let temp=""
        temp+="*"
        for(let j=1;j<=2*(n-1)-1;j++){
            temp+=" "
        }
        temp+="*"
        console.log(temp)
    }
    console.log(temp)
}
hollowSquare(4)

// print with matrix approach

function hollowSquareWithMatrix(n){
    for(let i=1;i<=n;i++){
        let rows=""
        for(let j=1;j<=n;j++){
            if(i==1 || j==1 ){}
        }

    }
}
let row=5;


for(let i=0;i<row;i++){
  
    //loop for spaces
    let spaces=""
    for(let j=0;j<row-i-1;j++){
      spaces+=" "
    }
    //loop to print star
    for(let k=0;k<2*i+1;k++){
        spaces+="*"
    }
   
    console.log(spaces)
}
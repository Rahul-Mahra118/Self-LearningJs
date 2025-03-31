let bills=[5,5,10,20];
function solve(n,bills) {
    let countFive=0;
  let countTen=0;
  for(let i=0;i<n;i++){
      if(bills[i]===5) countFive++;
      else if(bills[i]==10){
          if(countFive>0){
              countFive--;
              countTen++;
          }else{
              console.log("No");
              break;
          }
      }
      else if( bills[i]===20){
          if(countFive>0 && countTen>0){
              countFive--;
              countTen--;
          }
          else if(countFive>=3){
              count-=3;
          }
          else {
              console.log("No")
              break;
          }
      }
      isFlag=true;
    
  }
    
    
  }
  


if(isFlag)console.log("Yes")
let num=4;
if(num==0) return 0;
let binary=""
while(num>0){
    let rem= num%2;
    binary= rem+binary;
    
    num= Math.floor(num/2)
}

console.log(binary)
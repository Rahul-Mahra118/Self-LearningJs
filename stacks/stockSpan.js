//In this we have to find the consecutive element till ith position

// input= [100, 80, 60,75, 78,90];
//output=[1, 1,1,2,3,5];
let arr=[100, 80, 60,75, 78,90]
let stack=[];
let result=[];
result[0]=1;
stack.push(0);

for(let i=1;i<arr.length;i++){
    
    while(stack.length>0 && arr[stack[stack.length-1]]<=arr[i]){
      console.log(stack.pop())
    }
    if(stack.length>0){
        result[i]= i-stack[stack.length-1]
        console.log(result)
    }
    else{
        result[i]=i+1;
        // console.log('else',result)
     
    }
    stack.push(i) 
}
console.log(result)
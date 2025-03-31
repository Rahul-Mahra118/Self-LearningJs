// In this question we have to find the next smaller to right
let arr= [1,7,4,2,9,1,6,8,6,10,21];
// output=> [-1,4,2,1,1,-1,-1,6,-1,-1,-1]

let stack=[];
let result=[];
for(let i=arr.length-1;i>=0;i--){
    //stack se jo bda hai usko baahr nikaalenge

    while(stack.length>0 && arr[stack[stack.length-1]]>=arr[i]){
        stack.pop();
    }
    if(stack.length==0){
        result[i]= -1;
    }
    else{
        result[i]= arr[stack[stack.length-1]];
    }
    stack.push(i)
}
console.log(result)
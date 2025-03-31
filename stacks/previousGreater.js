let arr= [1,7,4,2,9,1,6,8,6,10,21];
//outpur->[-1,-1,7,4,-1,9,9,9,8,-1,-1]

let stack=[];
let result=[];

for(let i=0;i<arr.length;i++){

    while(stack.length>0 && arr[stack[stack.length-1]]<=arr[i]){
        stack.pop()
    }
    if(stack.length===0){
        result[i]=-1;
    }
    else{
        result[i]= arr[stack[stack.length-1]]
    }
    stack.push(i);
}

console.log(result)
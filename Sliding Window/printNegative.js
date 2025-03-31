// In this question we have to find the first negative number from  window size K

let i=0; //start point of window
let j=0; //end point of window
let k=3; //size of window
let arr=[12,-1,-5,6,7,8,-1,5,6]
//total  negative elements we get will be n-k+1(size-windowsize+1)
while(j<arr.length){
    if(j-i+1==k){
        let isFlag=false;
        let ele=0;
        for(let m=i;m<=j;m++){
            if(arr[m]<0){
                isFlag=true;
                ele=arr[m];
                break;
            }
        }
        if(isFlag) console.log(i,ele)
        else console.log(i,0)
        i++;
        
    }
    j++;
}
let nums1 = [4,1,2];
let nums2 = [1,3,4,2];
// /[1,2,3,4]

//compute the next greater element and store its index in map
//if no such element exist then store -1 in map for that element;
let stack=[];
let result=[];
let map= new Map();
for(let i=nums2.length-1;i>=0;i--){
    while(stack.length>0 && nums2[stack[stack.length-1]]<nums2[i])
    {
         stack.pop();
    }
    if(stack.length==0){
        map.set(nums2[i],-1);
    }
    else{
        map.set(nums2[i], nums2[stack[stack.length-1]])
    }
    stack.push(i)
}

for(let i=0;i<nums1.length;i++){
     result.push(map.get(nums1[i]))
}
console.log(result)

console.log(map)
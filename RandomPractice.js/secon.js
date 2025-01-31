let nums=[1,1,2]

var removeDuplicates = function(nums) {
    let count=1;
    let arr=[]
    for(let i=0;i< nums.length-1;i++){
        if(nums[i]!==nums[i+1]){
            count++
            arr.push(nums[i])
        }
        
    }
    if(nums[nums.length-1]!==nums[nums.length-2]){
        arr.push(nums[nums.length-1])
    }
    console.log( arr)
    
};
removeDuplicates(nums)
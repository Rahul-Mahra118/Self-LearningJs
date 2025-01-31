let str="laabbccd";
let n= str.length;

function calculateFrequency(n,str){
    let str1= str.split("")
    str1.sort()
    console.log(str1)
    let minFrequency=str1[0];
    let minCount=n;
    for(let i=0; i<n;i++){
        let count=1
        if (i > 0 && str1[i] === str1[i - 1]) {
            continue; 
        }
        for(let j=i+1;j<n;j++){
            if(str1[i]==str1[j]){
                count++;
            }

        }
        if(minCount>count){
            
            minFrequency=str1[i]
            minCount=count;
        }
        console.log(minCount)

    }
    console.log(minFrequency ,minCount)
}
calculateFrequency(n,str)
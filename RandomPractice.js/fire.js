


let arr = [
    [1, 2],        
    [3, 4, 5],     
    [6, 7, 8]      
];

let trap=[]
for(let i=0;i<arr.length;i++){
    trap[i]=[]
    for(let j=0;j<arr[i].length;j++){
        trap[i][j]=arr[j][i]
    }
}
console.log(trap)
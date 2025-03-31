let arr=[]
//created the 2d array--start->
let num=1;
for(let i=0;i<4;i++){
    arr[i]=[]
    for(let j=0;j<4;j++){
        arr[i].push(num++)
    }
}
console.log(arr)

//successfully populated the elements in 2d array --> end-->a
//-----------
// lets write the logic to reverse each row of 2d array

for(let i=0;i<4;i++){

    //inbuilt method
    // arr[i].reverse()
    let start=0;
    let end= 4-1;
    //i will swap the values
    while(start<end){
        let temp= arr[i][start];
        arr[i][start]= arr[i][end];
        arr[i][end]=temp;
    
        start++;
        end--;
    }
}
console.log(arr)
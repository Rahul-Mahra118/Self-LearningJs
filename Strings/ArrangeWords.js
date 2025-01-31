//In this code we will arrange the words in ascending order length.

let str="Rahul is a good Coder";

function sortByLength(str){
    const storeSpilitedString=str.split(" ");
    const ascendingOrder= storeSpilitedString.sort((a,b)=>a.length-b.length)
    console.log(ascendingOrder.join(" "))
}
sortByLength(str);
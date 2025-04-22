let binary=111;
let decimal=parseInt(binary, 2)
console.log(decimal);


let dec = 123;

let hex=""
while(dec>0){
    let rem= dec%8;
    hex= rem+hex;
    dec= Math.floor(dec/8)
}
console.log(hex)

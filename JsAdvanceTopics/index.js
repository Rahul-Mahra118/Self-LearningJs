// curryin function 
// it is a technique in functional programming where a fucntion , instead taking all arguments at onece, takes one at a tim e
// a curried function returns a new function that takes the next argument 


function add(a){
    return function (b){
        return function(c){
            return a+b+c;
        }
    }
}

let store1=add(4)(5)(8);
console.log(store1);























// // Banking System

// class Bank{
//     //privateFields
//     #pin
//     constructor(name, aadharNum,pin){
//      this.name=name;
//      this.aadharNum=aadharNum;
//      this.#pin=pin;
//     }
//     // getter and setter
//     get pin(){
//          return this.#pin;

//     }
//     set pin(cred){
//         if(cred.aadharNum===this.aadharNum){
//             this.#pin=456
//         }
//     }


// }

// let acount1= new Bank("rahul",123324343,1234)
// console.log(acount1.pin)
// acount1.pin={aadharNum:123324343}
// console.log(acount1.pin)

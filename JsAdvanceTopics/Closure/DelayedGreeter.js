function delayedGreeter(name,delay){
    return function execution(){
        setTimeout(()=>{
         console.log("hello ",name)
        },delay)
    }
}

const greet= delayedGreeter("rahul",2000);

greet()
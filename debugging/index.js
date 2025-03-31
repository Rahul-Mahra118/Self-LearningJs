function counter(initial){
    let count=initial;

    return function inner(){
        console.log(count++);
    }
}

let cc= counter(1);
cc();
cc();
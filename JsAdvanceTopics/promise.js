function task1(){
    let promise = new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Task 1 completed")
            res()
        },2000)
    })
    return promise;
}

function task2(){
    let promise = new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Task 2 completed")
            res()
        },2000)
    })
    return promise;
}

function task3(){
    let promise = new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Task 3 completed")
            res()
        },2000)
    })
    return promise;
}

task1()
.then(()=>task2())
.then(()=>task3())
function memoize(fn){
    const cache={}
    return function(...args){
        //in inner function's lexical scope it has access to cache obj
        // & fn.
        let stringyArgs=JSON.stringify(args);
        if(cache[stringyArgs]===undefined){
            cache[stringyArgs]=fn(...args); //multiply
        }
        console.log('cache[stringyArgs]',cache[stringyArgs])
        // second time it will extract the value.
        return cache[stringyArgs];
    }
}

const multiply= (num1,num2 )=>{
    for(let i=0;i<1000000000;i++){
        return num1*num2;
    }
}

const effectiveMultiply= memoize(multiply);

effectiveMultiply(980,970)
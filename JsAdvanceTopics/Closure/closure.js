function createCounter(initialvalue){
  let count= initialvalue;

  let obj= {
    increment:function(val){
      count+=val
    },
    decrement:function(val){
        count-=val ;
    },
    getValue:function(){
       console.log(count);
    },
    resetValue:function(){
        count=initialvalue;
    }
  }
  return obj;
}

const counter= createCounter(5);
counter.increment(3);
counter.getValue();
counter.decrement(2);
counter.getValue();
counter.resetValue();
counter.getValue()

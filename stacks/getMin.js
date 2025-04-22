// In this question we will try to find out the getMin()

// //push(5)
// push(3)
// push(7)
// getMin()
// pop()
// getMin()

class getMinStack{
    constructor(){
        this.stack=[];
        this.min=null;
    }

    add(val){
        if(this.stack.length==0){
           this.stack.push(val);
           this.min=val;
        }
        else{
            if(val>=this.min){
                this.stack.push(val)
            }
            else{
                this.stack.push(2*val-this.min);
                this.min=val;
            }
        }
    }
    remove(){
        if(this.stack.length==0){
            return -1;
        }
        else{
            if(this.stack[this.stack.length-1]>=this.min){
                this.stack.pop()
            }
            else{
                this.min= 2*this.min-this.stack[this.stack.length-1];
                this.stack.pop()
            }
        }
    }
    getMin(){
        if(this.stack.length==0){
            console.log('-1')
        }
        else{
          console.log(this.min)
        }
    }
}

let s1= new getMinStack();
s1.add(5)
s1.add(3)
s1.add(2)
s1.remove()
s1.remove()
s1.remove()
s1.getMin()
// s1.getMin()
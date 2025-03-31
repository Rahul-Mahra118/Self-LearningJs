// implement stack using queue

class stack{
    constructor(){
        this.q1=[];
        this.q2=[]
    }
    push(x){
        this.q1.push(x)
    }
    pop(){
      for(let i=this.q1.length-1;i>=0;i--){
        this.q2.push(this.q1[i])
      }
      return this.q2.shift()
      
    }
}

const s= new stack();
s.push(2);
s.push(3)
console.log(s.pop())
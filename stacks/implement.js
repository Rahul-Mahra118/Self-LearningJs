// implement stack using queue

class stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(x) {
    //initially we will push the element to queue
    this.q1.push(x);
    while (this.q2.length > 0) {
      //dequeue the element
      let val = this.q2.shift();
      this.q1.push(val);
    }
    //swap
    let temp = this.q2;
    this.q2 = this.q1;
    this.q1 = temp;
  }
  pop() {
    if (this.q2.length == 0) return -1;
    else return this.q2.shift();
  }
  isEmpty(){
    return this.q2.length===0;
  }

  top(){
    if(this.q2.length==0) return -1;
    else return this.q2.shift()
  }
}
//creating the object
let stk = new stack();

stk.push(10);

stk.push(20);

stk.push(30);

stk.push(40);

stk.push(50);

stk.push(60);

console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());
console.log('top of hte stack is ', stk.top())
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());

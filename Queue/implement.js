// Implement Queue using two Stacks
//we need two stacks
//s1= queue value stored
//s2= stack value
class ImplementQueueWithTwoStacks{
  constructor(){
    this.s1=[];
    this.s2=[];
  }

  enque(x){
    this.s1.push(x)
  }
  dequeu(){
    if(this.s1.length==0){
        if(this.s2.length==0){
            console.log('queue is underflow ')
        }
    }
   while(this.s1.length>0){
    let temp= this.s1.pop();
    this.s2.push(temp);
   }
   return this.s2.pop()
  }
//   in queue peek will pop out the front element
  peek(){
      if(this.s2.length==0 && this.s1.length>0){
        while(this.s1.length>0){
            this.s2.push(this.s1.pop())
        }
      }
      else{
        console.log(' empty')
      }
      
      return this.s2[this.s2.length-1];
  }
}

const q= new ImplementQueueWithTwoStacks();
q.enque(10);
q.enque(20)

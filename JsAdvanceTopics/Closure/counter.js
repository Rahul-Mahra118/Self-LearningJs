function counter(initialvalue){
   let value= initialvalue;
 
 function inner(){
     console.log(value);
     value++;
   }
  console.log(value)
  return inner;
}
const people = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" },
  ];

  
const [firstName , {name,age}, secondname]=people
console.log(firstName, name, age, secondname)
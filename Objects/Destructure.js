const complexObject = {
  user: {
    name: "John Doe",
    contact: {
      email: "johndoe@example.com",
      phone: "123-456-7890",
    },
  },
  preferences: {
    theme: "dark",
    notifications: { email: true, sms: false },
  },
};

// //parent destructure
// const { user, preferences } = complexObject;

// console.log(user, preferences);
//first level nested
// const { user:firstprop , user:{name, contact}}=complexObject;

// console.log(name,contact)

//deep destructuring

const {
  user: firstprop,
  user: { name, contact },
  user:{
    contact:{email:e, phone}
  },
  preferences:{
    theme,
    notifications:{
        email,
        sms
    }
  }

} = complexObject;

console.log(email);

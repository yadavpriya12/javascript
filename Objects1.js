// there are two types of declaring or creating object
// literal or constructor
// singelton - koi bhi object jb constructor ka use krke banate hai to singelton object banta hai
//literals se singelton object nhi banta
// Object.create (constructor object/singelton)
const JsUser =
 {
  name : "priya" ,
  age : 21,
  location : "indore" ,
  email : " hites@google.com",
   isLoggedIn : false,
   LastLoginDays : ["monday","saturday"]
} 

console.log(JsUser.email)


// in array we give only index to access the value of array but in object cretion we give the keyor value both
// Singleton
//object.create


// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shivam",
    "full name": "Shivam Chuarasia",
    // mySym: "mykey1", //  if we difine like this then the datatype of mySym is string not SYMBOL
    [mySym]: "mykey1",// this type of define keeps the datatype of mySym as SYMBOL
    age: 19,
    location: "Dhanbad",
    college: "IIT(ISM)",
    email:"shivam@google.com",
    isLoggedIn: true
}

// console.log(JsUser.name);//
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);//forthis typeof key we can't able to use the first syntax for output
// // console.log(JsUser.mySym);//this is aplicable when the data type is not SYMBOL
// console.log(JsUser[mySym]);//syntax when the data type is SYMBOL

// JsUser.email = "shivam@meta.com"//to overwrite the values 
// Object.freeze(JsUser) // we freezed the object now no changes can be done on it
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`) //convertion from ""string to backtiks`` is called string interpulation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
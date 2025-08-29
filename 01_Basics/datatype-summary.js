// Primitive data type


// 7 Types : String , Number  , Boolean , NUll , Undefined ,Symbol ,BigInt


//**JavaScript is a dynamically typed language.
//(we don't have to specify the type of data of variable when we are defining it)
const score = 100
const score7 = 100.3
const Value = "Shivam" 
const  isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const userid = Symbol('123')// both are different as we also can see in the ouput 

// console.log(id);
// console.log(userid);
// console.log(id == userid);
// console.log(id === userid);


//**Refrence / Non-premitive (refrence can be allocate in the ,memory)

// Arrays , Objects , Functions

const heros = ["Shaktimaan" , "Mrinnal Murli","Krish"]

let myObj = {
name : "Shivam",
age : 19
}

const myFunction = function(){
    console.log("Hello World");
}



console.log(typeof outsideTemp ); // object
console.log(typeof id );// symbol
console.log(typeof heros ); // object
console.log(typeof myObj ); // object 
console.log(typeof myFunction); //funtion or object-function
// console.log(typeof );
// console.log(typeof );

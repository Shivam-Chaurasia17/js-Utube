// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   };
// }

// // Using the 'new' keyword to create instances
// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// // Calling a method on the new instances
// person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
// person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.


//   **************************************************** 

const score = 400
// console.log(score);

const balance = new Number(102.35698)
// console.log(balance);
// console.log(balance.toString());//converts to the string
// console.log(balance.toFixed(2));// shows the value till the given decimal place after roundoff the value

const otherNumber = 1236.3268
// console.log(otherNumber.toPrecision(5)); // focus only till the given index from the start 
// console.log(otherNumber.toPrecision(3));
/* this will create mash as before decimal we have 4 digits but we try to precise it till 3 
output is 1.24e+3*/

const hundreds =1000000
// console.log(hundreds.toLocaleString());//place commas betwwen number according to the USA standards
// console.log(hundreds.toLocaleString('en-IN'));//place commas betwwen number according to the Indian standards


//+++++++++++++++++++++++++  MATHS  +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-56));//gives absolute value 
// console.log(Math.round(50.659));//round off all the decimal digits
// console.log(Math.ceil(50.059));// output is 51
// console.log(Math.floor(50.959));//output is 50

// console.log(Math.random());//widely used  gives values bitween 0 and 1
// console.log(Math.random()*10 + 1);
// console.log(Math.floor((Math.random()*10)) + 1);

const min = 1

const max = 6

console.log(Math.floor(Math.random()*(max - min + 1)) + min);
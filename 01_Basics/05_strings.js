
const name = "Shivam "
const gameName = new String('Shivam-ism-iit') // different way to define an string

const repoCount = 125

// console.log(name + repoCount + " IIT");// old syntax no one use it 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// console.log(`My name is ${gameName}`);

// console.log(gameName[0] + gameName[1] + gameName[2]);// we are inspecting the value for key 0
// console.log(gameName.__proto__);//acssesing the prototype
// console.log(gameName.length);
// console.log(gameName.fontsize());
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('S'));


const newstring = gameName.substring(1,5)// last index is excluded and we can't pass -ve values in it 
// console.log(newstring);

const anothersting = gameName.slice(-5,10)//last index is excluded but we can pass -ve number / index
// console.log(anothersting);

const anotherstring1 = "    Shivam   ism   "
// console.log(anotherstring1);
// console.log(anotherstring1.trim()); 
/* trim  does trim all the spaceswhich are at the start and at the end 
but do not trim the spaces present in bitween the words */

const url = "http://shivam.com/shivam%20chaurasia"
// console.log(url.replace('%20',' ')); // replacing %20 with space 
console.log(url.includes('Shivam'));// Are Shivam present in the url?

console.log(gameName.split("-"));// split with respect to the - 
console.log(gameName.split(""));//splits wrt nothing means every character gotsplitted and assigned deifferent index 
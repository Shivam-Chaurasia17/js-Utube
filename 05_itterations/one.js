//for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }


//while loop

// while (condition) {
    
// }


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//HIGHER order loops (specially for aaray bur can be used on object as well)
//and also applied on map

//for of

const myArr = ["Shaktiman","Batman","Superman","Spiderman"]

for (const nums of myArr) {
    // console.log(nums);
}

const map = new Map()
map.set("IN","India")
map.set("USA","America")
map.set("UK","United Kingdom")
map.set("FR","France")
map.set("USSR","Russia")

for (const key of map) {
    // console.log(key);
}
for (const [key,value] of map) {//destructuring of map
    // console.log(key);
}
for (const [key,value] of map) {
    // console.log(key + " :- " + value);
}


// const myObj = {
//     js : "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift:"swift by Apple"
// }

// for (const key of myObj) {
    // console.log(key);// for of loop doesn't works on objects 
// }



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//for in

const myObj = {
    js : "javascript",
    cpp: "c++",
    rb: "ruby",
    swift:"swift by Apple"
}

for (const key in myObj) {
    // console.log(key)
}
for (const key in myObj) {
    // console.log (myObj[key]);
}




// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate) // **OBJECT**


// let myCreatedDate = new Date(2023 , -1 , 23)//in this formate moths start from index 0 and -1 means reverse indexing from december 
// let myCreatedDate = new Date("2023-01-15") //in this formate moths start from index 1
// console.log(myCreatedDate.toDateString());


let myTime = Date.now()

// console.log(myTime);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));// in seconds 

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);

newDate.toLocaleDateString('default',{
    weekday: "short"
})// can customize this type of date and time output 
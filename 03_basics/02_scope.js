if(true){
const a = 10
let b = 20
var c = 30

}

// console.log(a); could not take output as it define inside the scope of if statement 
// console.log(b); could not take output as it define inside the scope of if statement 
// console.log(c); // can be acces even if it is define inside if statement


function one(){
   const username = "Shivam"

    function two(){
        const college = "IIT Dhanbad"
        console.log(username);
    }

    // console.log(college);

    // two()
}

one()


if(true){
    const username = "Shivam"

    if(username === "Shivam"){
        const college = " IIT Dhanbad"

        // console.log(username + college);
    }
    // console.log(college);
}
// console.log(username);
// console.log(college);

//+++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++


sum(102)//we can call this function before difining it in this kind of function definition
function sum(number){
    return number + 1
}

hold(15)//but we can't call this function before difining it in this kind of function definition
const hold = function(number){
    return number + 1 
}





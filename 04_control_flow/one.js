//+++++++++++++++++++++++++
// if and else
    
const username ="Shivam"
// if(username == "Shivam") console.log(`username is , ${username}`), console.log("Fuck you bitch")//
//special type syntax to write the if statement without curly braces







//+++++++++++++++++++++++++
//switch statements
// const month = "march"

// switch(month){
//     case "jan": 
//     console.log("jan");
//     break;

//     case "feb": 
//     console.log("feb");
//     break;

//     case "march": 
//     console.log("march");
//     break;

//     case "april": 
//     console.log("april");
//     break;

//     default:
//         console.log("no month matches");
// }

//+++++++++++++++++++++++++
//truthy and falsey 







//falsey 

//false , 0 ,-0 , null , undefined , BigInt  0n , ""

// tuthy
// " ", "false" ,"0" , function(){},{},[]



// NULLIES COALETION OPERATOR (??)

const num = 5 ?? 10 // first value be stored in num in this type of case 
console.log(num);

const num1 = null ?? 10 // in this case null will be ignored and 10 will be stored in the variable
console.log(num1);

const num2 = undefined ?? 10 // same as in the case of NULL
console.log(num2);

const num3 = null ?? undefined // this two are special in this cases the second one will be stored in the variavle 
                              //and if we write like null ?? undefined ?? 10 then it will store 10
console.log(num3);

const num4 = undefined ?? null// this two are special in this cases the second one will be stored in the variavle 
                             //and if we write like null ?? undefined ?? 10 then it will store 10
console.log(num4);




const score = 100

score <= 80 ? console.log("score is less than 80") : console.log("score is more than 80")
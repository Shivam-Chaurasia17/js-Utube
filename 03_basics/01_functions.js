
// function sum(num1,num2){
//     console.log(num1+num2);
// }
// sum(2,5)

function userLoggedin(username){
    if(!username){
        console.log("plz enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(userLoggedin());
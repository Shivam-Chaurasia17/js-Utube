
// function sum(num1,num2){
//     console.log(num1+num2);
// }
// sum(2,5)

function userLoggedin(username) {
    if (!username) {
        console.log("plz enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(userLoggedin());

function calculateCartprice(...num1) {
    return num1

}

// console.log(calculateCartprice(200,300,26))

const user = {
    username: "Shivam",
    age: 19
}

function handleusername(anyobject) {
    console.log(`username is ${anyobject.username} and their age is ${anyobject.age}`)
}

// handleusername(user)

// handleusername({
//     username: "Harry",
//     age: 20
// })

const myNewArray = [100, 200, 652, 69]


function retursecondvalue(getArray) {
    return getArray[1]
}

console.log(retursecondvalue(myNewArray));
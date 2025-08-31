// const tinderUser = new Object() -> singleton

const tinderUser = {}

tinderUser.id = "123abd"
tinderUser.name = "Shivam"
tinderUser.loggedIn = false

// console.log(tinderUser);
 

const regularUser = {
    email: "shivam@pepsi.com",
    fullname: {
        userfullname: {//nesting oof object
            firstname: "Shivam",
            middlename: "H",
            lastname: "Chaurasia"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = { 1: " a" , 2: " b"}
const obj2 = { 3: " c" , 4: " d"}
//const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}/*target not compolsury to write*/,obj1,obj2);// not use this syntax much

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {},
    {},
    {},

    { id:1,
        email:"shivam@sde.com"
    },
    { id:2,
        email:"shivam@iit.com"
    },
    { id:3,
        email:"shivam@jnv.com"
    },
    { id:4,
        email:"shivam@gus.com"
    },
    { id:5,
        email:"shivam@chatgpt.com"
    }
]

user[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("loggedIn"));


const course = {
    courseName: "JS in hindi",
    coursePrice: "349",
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor)

const {courseInstructor} = course// destructuring of object 
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


//JASON formate APIs

// {
//     "name" : "Shivam",
//     "college": "IIT Dhanbad",
//     "Branch" : "Mining Engn."
// }

[
    {},
    {},
    {}
]
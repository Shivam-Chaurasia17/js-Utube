const user = {
    username : "Shivam",
    price : 6594,

    welcomeMessage : function(){
            console.log(`${this.username} , welcome to website`);
            console.log(this);    }
}
// user.welcomeMessage();
// user.username = "Harry"
// user.welcomeMessage();

// console.log(this);// return empty object

function chai(){
    let username = "Shivam"
    console.log(this.username);//return undefined 
    //as it can't able to do the same work like it does in object
}
// chai()

const chai2 = function (){
    let username = "Shivam"
    console.log(this.username);//return undefined 
    //as it can't able to do the same work like it does in object
}
// chai2()

const chai3 = () => { let username = "Shivam"
    console.log(this.username);//return undefined 
    //as it can't able to do the same work like it does in object
}
// chai3()


const sum = (num1,num2) => {
    return num1 + num2
}

const sum2 = (num1 , num2) => num1 + num2 // no need to write return 

const sum3 = (num1 , num2) => (num1 + num2)//same no need to write return but we can use paranthesis 

const usr = () => ({username:"Shivam"}) // if i want to write object in the same fashion in which 
// we do not need to wrute the RETURN then we must have to write the object inside the paranthesis
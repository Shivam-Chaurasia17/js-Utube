
const coding = ["js", "ruby", "java", "python", "cpp", "php"]

const num = coding.forEach( (item) => {
    // console.log(item);
    return item//undefinedQ     YR
    
} )

// console.log(num);//undefined 

const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum.filter( (number) => number % 3 == 0 )
console.log(newNum);// filter can return values 



const newNum2 = myNum.filter( (number) => {
    return number % 2 == 0 // **** NEED to write the RETURN here *******************
} )
console.log(newNum2);// filter can return values 


//if we want return from foreach function then
//************************************ */

const newNums = []
myNum.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
} )
console.log(newNums);
//reduce 

const myNums = [1, 2, 3, 4]

// let myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
// } , 0)
// console.log(myTotal); 

let myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
// console.log(myTotal); 

let shoppingCart = [
    {
        itemNAme: "js course",
        price: 999
    },
    {
        itemNAme: "html course",
        price: 1999
    },
    {
        itemNAme: "python course",
        price: 9999
    },
    {
        itemNAme: "css course",
        price: 2993
    }
]

const totalPrice = shoppingCart.reduce((acc, cprice) => (acc + cprice.price), 0)
console.log(totalPrice);
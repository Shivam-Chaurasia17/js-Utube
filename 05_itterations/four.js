//map

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNUm = myNum.map((nums) => nums + 10)
// console.log(newNUm);

//chaining

newNUm = myNum
    .map((nums) => nums * 10)
    .map((nums) => nums + 2)
    .filter((nums) => nums > 56)

    console.log(newNUm)
const marvel_heros = ["thor" , "ironman", "spiderman"]
const dc_heros = ["superman" ,"flash" ,"batman"]

marvel_heros.push(dc_heros) // will push complete array dc_heros as a single element 
// console.log(marvel_heros[2]);

const all_heros = marvel_heros.concat(dc_heros)//will add each element as new element overcome the constraints of push method
// console.log(all_heros);

const all_new_heros = [ ...marvel_heros, ...dc_heros]//spread operatore used this inplace of concat
// console.log(all_new_heros);

const new_another_array = [1,2,3,[,4,2,3],5,9,[1,5,6,[58,6,8],52],2,25]
const new_real_array = new_another_array.flat(Infinity)
// console.log(new_real_array);

//**************************** 
// console.log(Array.isArray("Shivam"));
// console.log(Array.from("Shivam"));
// console.log(Array.from({name: "Shivam"}));//retun empty array as it can't able to decide whether to convert the key or value

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3)); // same Array.from
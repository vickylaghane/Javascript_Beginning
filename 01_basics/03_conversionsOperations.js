let score = 33

console.log(typeof score); // number
console.log(typeof(score)); // number

// Let's change the datatype of the above number into string
let valueInString = String(score)
console.log(typeof valueInString); // string
console.log(valueInString); //33

console.log("=======================================");

let string1 = "33"

console.log(typeof string1); // string
console.log(typeof(string1)); // string

// Let's change the datatype of the above string into number
let valueInNumber = Number(string1)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); //33

console.log("=======================================");

let score2 = null

console.log(typeof score2); // object
console.log(typeof(score2)); // object

// Let's change the datatype of the above null into number
let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1); // number
console.log(valueInNumber1); //0
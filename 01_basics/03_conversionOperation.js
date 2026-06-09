let score = "33abc"
let s= null;
let a= undefined
let boolean = true
console.log(typeof score)

let valueInNumber= Number(score);
let valueins=Number(s)
let valueina=Number(a)
let valueinboolean=Number(boolean)
console.log(typeof valueInNumber)
console.log(valueInNumber) // output - NaN as 33abc is not a pure number
console.log(valueins)// output - 0
console.log(valueina)//output - NaN
console.log(valueinboolean)// 1 if true 0 if false

let isLoggedin=1
let booleanisLoggedin= Boolean(isLoggedin)
console.log(booleanisLoggedin)
// "" = false
// "anyvalue"= true

let someNumber= "33"
let StringNumber= String(someNumber)
console.log(typeof StringNumber);
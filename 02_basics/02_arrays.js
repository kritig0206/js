const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","flash","batman"]

//marvelHeros.push(dcHeros)
//console.log(marvelHeros)// array will be pushed but it will be array in an array and whole dc heros will be considered as one
//console.log(marvelHeros[3][1])
const heros=marvelHeros.concat(dcHeros)
//console.log(heros)


const allheros=[...dcHeros,...marvelHeros] // spread
//console.log(allheros)

const anotherArr=[1,2,3,[4,5,6],7,[8,[9,10]]]
const usableArr=anotherArr.flat(Infinity)// makes a single arr
//console.log(usableArr)

console.log(Array.isArray("kRITI"))
console.log(Array.from("Kriti"))// converts to array
console.log(Array.from({Name:"Kriti"}))// returns empty array

let a=10
let b=20
let c=30
const arr1=Array.of(a,b,c)
console.log(arr1)
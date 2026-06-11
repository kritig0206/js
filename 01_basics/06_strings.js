const name="kriti"
const repo="50"

// console.log(name+repo+"value")

console.log(`Hello my name is ${name} and my repo number is ${repo}`)

const gameName= new String('Kriti-Gera')// data type of string is object

console.log(gameName[0])

console.log(gameName.length)

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newstring = gameName.substring(0,4)
console.log(newstring) // character at 0,1,2,3 will be printed

const anotherString=gameName.slice(-8,4)
const newStringOne = "   Kriti    "
console.log(newStringOne.trim())

const url="abcdefgh.google.com"
console.log(url.replace('abc','lol'));
console.log(url.includes('abc'));

const arrstring=new String('KRITI GERA')
console.log(arrstring.split(' '))
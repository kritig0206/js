const arr = [1,2,3,4,5] // elements inside can be similar or disimilar both
const myHeroes = ["shaktiman","nagraj"]
//console.log(arr[0])

const arr2= new Array(1,2,3,4)

// Array Methods

//arr.push(6)
//console.log(arr)
//arr.pop()
//console.log(arr)

//arr.unshift(9)
//arr.shift()

//console.log(arr.includes(9))
//console.log(arr.indexOf(-9))// output -1
//console.log(arr)

const newarr=arr.join() // adds all elements as a string
//console.log(newarr)
//console.log(typeof newarr)

console.log(arr)
const n1=arr.slice(0,3)// does not change orignal array does not include element 3

console.log(n1)
const n2=arr.splice(0,3)// removes content from orignal array includes index 3
console.log(n2)
console.log(arr)

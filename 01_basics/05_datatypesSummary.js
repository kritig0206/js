//  primitive
// 7 types : String,Boolean,Symbol,Null,Undefine,Number, BigInt

const score = false // as we dont define datatypes during compile time therefore javascript is dynamically typed language

const id= Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid)// false
// referance type (Non-primitive)

// arrays,objects,functions

const arr=[1,2,3,4]

let myObj={
name:kriti,
age:20
}
// TYPE OF FUNCTION IS FUNCTION OBJECT
const myFnctn=function(){
console.log("heylo")
}

 
console.log(typeof myObj) // OBJECT
console.log(typeof arr) // OBJECT

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=== 
 
// Stack (primitive)=> copy of value and heap(non primitive)=>referance

let a= 10;
let b=a;
b=1;
console.log(a)
console.log(b)

let myobj={
    value1:1,
    value2:2
}
let newobj=myobj
newobj.value1=3;
console.log(newobj.value1)
console.log(myobj.value1)

function myName(){
    console.log("k")
    console.log("r")
    console.log("i")
    console.log("t")
    console.log("i")
}
//myName()
//myName no output

function add(n1,n2){
console.log(n1+n2)
}
const result = add(2,3)
// if no parameter was passed inside -NaN(output)
//console.log(result) // output - undefined as we did not store n1+n2 in a variable
function addtwo(n1,n2){
    let result =n1+n2
    return result
}
//now this function can print result

function loginUser(username){
    return `${username} just logged in`
}
//console.log(loginUser("Kriti"))
// if no parameter passed undefined just logged in

function CalculateCartPrice(val1,val2,...num1){
return num1
}
//console.log(CalculateCartPrice(200,400,500))
//... is the rest operator which converts it to array
// first two values go to val1 and val 2 and rest is converted to array

const user={
    username: "hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`${anyobject.username} is username,price is ${anyobject.price}`)
}
handleObject(user)
// singleton - not literal (constructor)

// literal

const mySym = Symbol("key1");

const jsUser={
     name : "Kriti",
     age: 18,
     city :"Delhi",
     [mySym]:"myKey1",
     isLoggedin:false,
     LastLoggedinDays:["Monday","Friday"]
}

console.log(jsUser.name)
console.log(jsUser["age"])
console.log(jsUser[mySym])

jsUser.city="Jaipur"
//Object.freeze(jsUser)

jsUser.greeting=function(){
    console.log(`Hello ${jsUser.name}`)
}

jsUser.greeting();
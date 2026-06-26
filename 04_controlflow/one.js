//if
if(true){

}
const isUserLoggedIn = true
const temp=50
if(temp<50){
console.log("Temp is less than 50");
}else{
    console.log("Temp is greater than 50");
}
let balance=400
if(balance<500) console.log("Balance is less than 500");// implicit
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
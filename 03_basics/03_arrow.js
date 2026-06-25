const user={
    username: "Hitesh",
    price:999,


    welcomeMessage: function(){
        console.log(`Welcome to website,${this.username}`)
        //console.log(this){whole object}
    }
}

//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()
//console.log(this) output = {}
// if run on dom or browser output - window

//function chai(){
  //  let username="hitesh";
   // console.log(this)// gives many values
   //console.log(this.username)// gives undefined
//}
//chai()

const chai=()=>{
//arrow function
}

const addTwo=(n1,n2)=>{
return n1+n2
}
//console.log(addTwo(2,3))
//const addTwo=(n1,n2)=return (n1+n2)  IMPLICIT RETURN

const TinderUser = new Object(); // this is singleton method
//const TinderUser={}// non singleton
 
TinderUser.id ="abc"
TinderUser.name="Kriti"
TinderUser.isloggedIn=false

//console.log(TinderUser)
const regularUser={
    email:"kritig0206@gmail.com",
    FullName: {
        FirstName: "Kriti",
        LastName:"Gera"
    }
}
//console.log(regularUser.FullName.FirstName)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
//const obj3={obj1,obj2}
//console.log(obj3)

//const obj3=Object.assign({},obj1,obj2) // all values go in paranthesis but if no paranthesis all values go in obj1
const obj3={...obj1,...obj2}

//console.log(obj3)

const users=[
    {
        id:1,
        email:"kritig@gmail.com"
    },
    {
    },
    {

    },
]
users[1].email

//console.log(Object.keys(TinderUser))
//console.log(Object.values(TinderUser))
//console.log(Object.entries(TinderUser))
//console.log(TinderUser.hasOwnProperty('isloggedIn'))

const course = {
    courseName:"JS in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
//course.courseInstructor
const {courseInstructor : instructor}=course
//console.log(courseInstructor);

const Navbar = ({company})=>{

}


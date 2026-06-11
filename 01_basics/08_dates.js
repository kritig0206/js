let mydate= new Date()
//console.log(mydate)//will give some unreadable answer
//console.log(mydate.toString())
//console.log(mydate.toDateString())
//console.log(mydate.toISOString())
//console.log(mydate.toLocaleDateString())

//console.log(typeof mydate)// object

let createdDate= new Date(2023,0,3)
//console.log(createdDate.toDateString())

let date= new Date("2023-01-20")
//console.log(date.toLocaleDateString())

let myTimestamp = Date.now();
console.log(myTimestamp) // gives a long number which is number of milliseconds from 1 jan 1970
console.log(createdDate.getTime())

// to get timestamp in seconds
console.log(Math.floor(Date.now()/1000))

console.log(date.getMonth()+1)
// for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]
for(const num of arr){
    //console.log(num)
}
let str="hello world"
for(const char of str){
    //console.log(char)
}
const map = new Map()
map.set("IND", "India")
map.set("USA", "United States")
map.set("CAN", "Canada")
//console.log(map)

for(const key of map){
   // console.log(key)//prints [IND, India] [USA, United States] [CAN, Canada]
}
for(const [key, value] of map){
   // console.log(key, value) //prints IND India
}
const myObj={
    'game1': 'Chess',
    'game2': 'Checkers'
}
for(const [key,value]of myObj){
   // console.log(key, value)// TypeEroor :my Obj is not iterable
}


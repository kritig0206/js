const coding=["java", "python", "javascript","ruby"]


const values=coding.forEach((item)=>{
   // console.log(item)//gives the output of each item in the array but does not return a new array
    return item
})

//console.log(values)// undefined because forEach does not return a new array, it returns undefined.

const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num)=>num%2===0)//filter even numbers
//nst newNums=myNums.filter((num)=>{
  //return num%2===0//mention of return is necessary here because scope that is curly braces is used.
//})
const newNums=[]
myNums.forEach(num=>{
    if(num%2===0){
        newNums.push(num)
    }
})
//console.log(newNums)//[2,4,6,8,10] because filter returns a new array with the filtered values.
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
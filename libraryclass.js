// Implement a Node.js class for managing a library system, with methods for adding, removing, and searching for books.


import {Chance} from 'chance'
class Library {
    constructor(books){
 this.books = books
    }

    adding(book){
     let max_id = this.books.reduce((max,curr)=>{
        return curr.id > max ? curr.id : max
     },-Infinity)
     this.books.push({id:max_id+1,name:book})
     return {
        message:"Book added to the library",
        book : this.books
     }
    }
    removing(name){
     let index = this.books.findIndex((book)=> book.name == name)
     this.books.splice(index,1)
     return {
        message:"book removed from library",
        book : this.books
     }
    }
    searching(name){
 return this.books.filter((book)=> book.name.includes(name))
    }
}
const books = [{id:1,name:"danbrown"},{id:2,name:"the Thunder"},{id:3, name:"rich dad poor dad"}]
const lib = new Library(books)
const chance = new Chance()
for(let i=0;i<10;i++)
    {
        lib.adding(chance.name())
    }

// console.log(lib.removing('danbrown'))
// console.log(lib.searching('the Thu'))


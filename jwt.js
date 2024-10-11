import { EventEmitter } from "events";
import jwt from 'jsonwebtoken'
const event = new EventEmitter()

const a = (a,b)=>{
    console.log(a+b)
}

event.on('adding',a)
event.emit('adding',10,15)

var secret = "shuruthi"
let data = {
    a:"a",
    b:"b",
    c:"c"
}
const createToken = async (data)=>{
    try{
const token =  jwt.sign(data,secret,{
    expiresIn :'1h'
})
console.log(token)
const res = jwt.verify(token,secret)
console.log(res)
    }catch(e){
        console.log(e)
    }
}

event.on('create Token',createToken)
event.emit('create Token',data)


// error eventemmitter 


const error = (err)=>{
console.log("error---------------->",err)
}

event.on('error',error)
event.emit('error',new Error("abcd"))

// extend event emitter 

class myEmitter extends EventEmitter{

}
const myEmit = new myEmitter()

myEmit.on('ab',(data)=>{
    console.log("Calling Subclass ",data)
})

myEmit.emit('ab',5)
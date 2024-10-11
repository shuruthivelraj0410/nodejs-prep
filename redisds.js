import redis from 'redis';

const redisClient = redis.createClient({
    url : "redis://localhost:6379/1"
});

(async()=>{
    try{
await redisClient.connect()
    }catch(e){
        console.log(e)
    }
})();
// set and get method

let set_data = "aserfcvghbnjkolkmwerfh"
redisClient.set("set data june 7",set_data).then(()=>{
    console.log("data set")
})

redisClient.get("set data june 7").then((data)=>{
    console.log(data)
})

//set with expiry

let exp_set_data = "serfcgyuhbnjiknmk"
redisClient.SETEX("expiry data june 7",10000,exp_set_data).then(()=>{
    console.log("set expiry with data done")
})
redisClient.get("expiry data june 7").then((data)=>{
    console.log(data)
})

//list

let list = ["abcd",'{a:"a"}',1244]
list.forEach((l)=>{
    redisClient.lPush('s3',l.toString()).then(()=>{
        console.log("All done")
    })
})

redisClient.lRange('s3',0,-1).then((data)=>{
    console.log(data)
})

// hashes 

let hash = {
    a :"a",
    b:"b",
    c:"c",
    c:'d'
}

redisClient.hSet('s4',hash).then(()=>{
    console.log("s4 hash done")
})

redisClient.hGetAll('s4').then((data)=>{
    console.log(data)
})

redisClient.hGet('s4','a').then((data)=>{
    console.log("------------->",data)
})

// sets 

let s1 = `{
    name :"abcd",
    age : 23
}`
let s2 = `{
    name : "bcde",
    age:21
}`
let s3 = `{
    name : "bcde",
    age:21
}`

let s = [s1,s2,s3]

s.forEach((s)=>{
    redisClient.SADD('saddd',s).then(()=>{
        console.log('sadd implemented')
    })
})

redisClient.SMEMBERS('saddd').then((data)=>{
    console.log(data)
})
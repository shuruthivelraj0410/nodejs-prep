import redis from 'redis'


const redisPublisher = redis.createClient({
    url :"redis://localhost:6379/1"
});

(async()=>{
    try{
await redisPublisher.connect()
await redisPublisher.publish('topic1','abcdef').then((data)=>{
    console.log("----------->>published data topic1")
    console.log(data)
})
await redisPublisher.publish('topic1','!@#$^&').then((data)=>{
    console.log("----------->>published data topic2")
    console.log(data)
})
    }catch(e){
        console.log(e)
    }
})()
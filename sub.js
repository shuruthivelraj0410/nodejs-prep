import redis from 'redis';

const redisSub = redis.createClient({
    url:"redis://localhost:6379/0"
});

(async ()=>{
    try{
await redisSub.connect()
redisSub.subscribe('topic1',(data)=>{
    console.log("**********",data)
})
    }catch(e){
        console.log(e)
    }
})();



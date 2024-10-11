const a = Promise.reject(3)
const b = Promise.reject(4)
const c = Promise.resolve(5);

(async()=>{
    try{
console.log(await Promise.all([a,b,c]))
    }catch(e){
        console.log(e)
    }
})();


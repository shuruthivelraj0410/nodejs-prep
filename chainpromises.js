const a = new Promise((resolve,reject)=>{
resolve("Hiii")
});
const thenFunction = (data)=>{
    return new Promise((resolve,reject)=>{

       data == 'even'? resolve("Irritation") : reject("bleedy")
    })
}
const getFunction = (n)=>{
    return new Promise((resolve,reject)=>{
    if(n%2 == 0){
        resolve("even")
    }
    else{
        reject("odd")
    }
    })
}

(async()=>{
const chainFunction = await getFunction(4).then((data)=>{
    console.log(data)
    return thenFunction(data)
 }).catch((e)=>{
    console.log("888888888888888",e)
 }).then((data)=>{
    return data
 })
 console.log(chainFunction)
})();
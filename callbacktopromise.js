const callback = (err,data)=>{
    return new Promise((resolve,reject)=>{
if(err){
    reject(err)
}
else{
    resolve(data)
}
    })
}

const getData = (data,callback)=>{
callback(data).then((data)=>{
    console.log("------------->>",data)
}).catch((e)=>{
    console.log(e)
})
}
let data = 6

getData(data,callback )
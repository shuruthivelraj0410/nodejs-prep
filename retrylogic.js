const getData = (a,retryCount)=>{
    return new Promise((resolve,reject)=>{
     if(a==1){
        resolve("1234567")
     }
     else{
        reject(retryCount)
     }
    })
}
let data = 2
let retryCount = 3
const retryLogic = async(data,retryCount)=>{
    getData(data,retryCount).then((data)=>{
        console.log("inside then")
    }).catch((e)=>{
        if(e>0){
            console.log("----------------->",e)
            return retryLogic(data,e-1)
        }
        else{
            console.log("All retry exhausted")
        }
    })
}

retryLogic(data,retryCount)
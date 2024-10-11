
const getDataResolver = (parent,args,context,info)=>{
    console.log("***************************")
  let response = {}
  let b = {
    a:"a"
  }
  response.data = "ertghujnk"
  response.a = b
  return response
}



export {
    getDataResolver
}
import axios from "axios";


(async()=>{
    try{
// let data = await axios.get('https://jsonplaceholder.typicode.com/todos/')
// let response = await axios.post('http://localhost:4000/',{
    
//         name :"shuruthi",
//         age : 23
    
// })
// console.log(response.data)
const response = await axios.put('http://localhost:4000/?id=9')
console.log(response.data)
    }catch(e){
        console.log(e)
    }
})()

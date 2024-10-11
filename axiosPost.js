import bodyParser from 'body-parser';
import express from 'express';


const app = express();
app.use(bodyParser.json());
let a = [0,8,1,2,3,4,5,6,7]
app.post('/',(req,res)=>{
console.log(req.body)
res.json({
    status:200,
    message :"message received"
})
})
app.delete('/',(req,res)=>{
    let id = parseInt(req.query.id,10)
   let index = a.indexOf(id)
   a.splice(index,1)
   res.json(a)
    
})
app.put('/',(req,res)=>{
    let id = parseInt(req.query.id)
    let index = a.indexOf(id)
    console.log(index)
    if(index == -1){
        a.push(id)
        res.json({a,
           message :"Id added"
        })
    }
    else{
        res.json({
            message:"id already present",
            a
        })
    }
})

app.listen('4000',()=>{
    console.log('listening to port 4000')
})
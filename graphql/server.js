import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { applyMiddleware } from 'graphql-middleware';
import { expressPlayground } from 'graphql-playground-middleware';
import {schema} from './schema.js'
const app = express();

console.log("*********",schema)
const SchemaMiddleware = applyMiddleware(schema)
console.log(SchemaMiddleware)
app.use('/graphql',(req,res)=>{
graphqlHTTP({
    schema : SchemaMiddleware,
    rootValue : global,
    graphiql : true
})(req,res)
})

app.get('/playground',expressPlayground({
    endpoint :"/graphql"
}))
app.listen(3000,()=>{
    console.log('port running at 3000')
})
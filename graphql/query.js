import { GraphQLObjectType } from "graphql"
import {getData} from './getData.js'
const query = new GraphQLObjectType({
    name :"query",
    fields :{
        getData
    }
})


export {
    query
}
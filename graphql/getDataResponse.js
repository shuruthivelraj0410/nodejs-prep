import { GraphQLObjectType, GraphQLString } from "graphql"
import {GraphQLJSON} from "graphql-type-json"

const getDataResponse = new GraphQLObjectType({
    name :"getDataResponse",
    fields:{
        data : {
            type : GraphQLString
        },
 a :{
    type :GraphQLJSON
 }
    }
})


export {
    getDataResponse
}
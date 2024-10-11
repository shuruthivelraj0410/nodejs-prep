import { GraphQLSchema } from "graphql"
import {query} from './query.js'

const schema = new GraphQLSchema({
    query : query
})

export {
    schema
}
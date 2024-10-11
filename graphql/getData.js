import { GraphQLString } from "graphql"
import {getDataResolver} from './getDataResolver.js'
import {getDataResponse} from './getDataResponse.js'
const getData = {
    type : getDataResponse,
    args : {
        a : {
            type : GraphQLString
        }
    },
    resolve : getDataResolver
}




export {
    getData
}
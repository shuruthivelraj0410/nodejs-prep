import { Database } from "./databaseclass.js";
import {createRequire} from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()
import {Chance} from 'chance'
const connect ={
    database:"sequelize_test",
    username:"root",
    password:"password",
    host:"localhost",
    dialect:"mysql",
    port:3306
}
const n = parseInt(prompt('n : '),10)
const db = new Database(connect)
const chance = new Chance()
for(let i=0;i<n;i++){
let args = {
    name : chance.name(),
    email: chance.email()
}
db.insertData(args)
}

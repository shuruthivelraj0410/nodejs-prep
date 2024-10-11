// Write a Node.js class that connects to a database and performs basic CRUD operations.
import Sequelize from 'sequelize';
import { model } from './model_creation.js';
import {Chance} from 'chance'
class Database{
    constructor(connect){
      this.database = connect.database,
      this.username = connect.username,
      this.password = connect.password,
      this.host = connect.host,
      this.dialect = connect.dialect,
      this.port = connect.port
    }
    async createConnection(){
      const sequelize = new Sequelize(this.database,this.username,this.password,{
        host : this.host,
        port : this.port,
        dialect : this.dialect
      })  
      sequelize.authenticate().then(()=>{
        console.log(`connected to ${this.database}`)
      }).catch((e)=>{
        console.log(e)
      })
      return sequelize
    }
    async defineModel(){
      let detail_db = model(await this.createConnection())
      detail_db.sync().then(()=>{
        console.log("Table synced")
      }).catch((e)=>{
        console.log(e)
      })
    //   this.detail_db = detail_db
      return detail_db
    }
    async insertData(){
        let detail_db = await this.defineModel()
        setTimeout(async ()=>{
            if(detail_db){
                let chance = new Chance()
                for(let i=0;i<20;i++){
                    let args = {
                        name : chance.name(),
                        email: chance.email()
                    }
                    console.log("&&&&&&&&&&&&&&&&&&",args)
              await detail_db.create({
                name:args.name,
                email:args.email
                
                
              })
            }
            }
        },2000)
}
}
const connect ={
    database:"sequelize_test",
    username:"root",
    password:"password",
    host:"localhost",
    dialect:"mysql",
    port:3306
}
const db = new Database(connect)
db.insertData()
export {
    Database
}



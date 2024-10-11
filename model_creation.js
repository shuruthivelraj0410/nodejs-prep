import {DataTypes} from 'sequelize'

const model = (sequelize)=>{
let detail_db =  sequelize.define('cus_details',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey:true,
        allowNull : false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
return detail_db
}

export {model}
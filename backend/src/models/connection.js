
const mysql = require('mysql2/promise')

require('dotenv').config()

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DB
})

module.exports = connection


const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql"
})

sequelize.authenticate()
.then(function(){
    console.log("Conexao com DB realizada com sucesso")
}).catch(function(){
    console.log("Erro conexao com DB não realizada com sucesso")
})

module.exports = sequelize 





const Sequelize = require("sequelize")
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  });


sequelize.authenticate()
.then(function(){
    console.log("Conexao com DB realizada com sucesso")
}).catch(function(error){
    console.log("Erro conexao com DB não realizada")
    console.log(error)
})

module.exports = sequelize 






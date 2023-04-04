
const Sequelize = require("sequelize")

const sequelize = new Sequelize('database1', 'root', 'meusql', {
    host: 'localhost',
    dialect: 'mysql',
  });

sequelize.authenticate()
.then(function(){
    console.log("Conexao com DB realizada com sucesso")
}).catch(function(){
    console.log("Erro conexao com DB não realizada")
})

module.exports = sequelize 






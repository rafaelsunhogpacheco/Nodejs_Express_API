const sequelize = require("./src/config/connection");
const Product = require("./src/models/schemaProduct")

async function criarBancoTeste() {
  try {
    await sequelize.authenticate();
    console.log("Conectado com sucesso!");
    await sequelize.sync({ force: true });
    await Product.create({
      product_name: "Produto de Teste",
      product_desc: "Descrição do Produto de Teste",
      quantity: 10,
      price: 19.99,
    });
    console.log("Banco de dados criado com sucesso!");
  } catch (error) {
    console.log("Erro ao criar o banco de dados:", error);
  }
}

criarBancoTeste();

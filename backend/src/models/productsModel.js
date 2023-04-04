// const connection = require('./connection')


// const getAll =  async () => {
//     const products = await connection.execute('SELECT * FROM products')
//     return products
// }

// module.exports = {
//     getAll
// }

const sequelize = require("./connection")

const getAll = async () => {
    constproducts = await sequelize.execute('SELECT * from products')
    return process
}

module.exports = {
    getAll
}

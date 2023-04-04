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
    const products = await sequelize.execute('SELECT * from products')
    return products
}

module.exports = {
    getAll
}

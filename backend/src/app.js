const express = require('express')
const app = express()
const router = require('./router')


app.use(router)


// const servidor = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// servidor.use(rotas)
// const PORTA = 3000



module.exports = app
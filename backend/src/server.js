const app = require('./app')
// const dotenv = require('dotenv') ALTERNATIVE
// dotenv.config()  ALTERNATIVE
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
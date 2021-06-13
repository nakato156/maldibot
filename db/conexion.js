const mongoose = require('mongoose')
const uri = process.env.DB_CONNECTION
mongoose.createConnection(uri,{ useNewUrlParser: true, useUnifiedTopology: true})
.on('open', ()=>console.log("Conected"))
.on('error', err => console.log("error",err))
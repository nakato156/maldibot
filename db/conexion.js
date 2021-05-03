const mongoose = require('mongoose')
const uri = process.env.DB_CONNECTION
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(y=>{
    console.log('Conected')
})
.catch(err=>{
    console.log('error',err)
}) 
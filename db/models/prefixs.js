const {Schema, model} = require('mongoose')

const prefixs = new Schema ({
    serverID:String,
    prefix:String,
    userID: String,
})
module.exports = model('prefixs', prefixs)
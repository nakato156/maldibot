const {Schema, model} = require('mongoose')

const invocation = new Schema ({
    userID: String,
    invocation: String,
})
module.exports = model('invocations',invocation)